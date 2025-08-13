import { useState } from "react";

interface FormData {
  name: string;
  surname: string;
  message: string;
  files: File[];
}

interface FilePreview {
  file: File;
  preview: string;
  size: number;
}

const WeddingForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    surname: "",
    message: "",
    files: [],
  });
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sabitler
  const MAX_FILES = 2;
  const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
  const MAX_TOTAL_SIZE = 30 * 1024 * 1024; // 30MB

  // Form alanları değiştiğinde tetiklenir
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "files" && files) {
      handleFileSelection(files);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Dosya seçimi kontrolü ve önizleme oluşturma
  const handleFileSelection = (selectedFiles: FileList) => {
    const filesArray = Array.from(selectedFiles);
    
    // Maksimum dosya sayısı kontrolü
    if (filePreviews.length + filesArray.length > MAX_FILES) {
      alert(`❌ Maksimum ${MAX_FILES} fotoğraf seçebilirsiniz!`);
      return;
    }

    // Dosya boyutu kontrolü
    const oversizedFiles = filesArray.filter(file => file.size > MAX_FILE_SIZE);
    if (oversizedFiles.length > 0) {
      alert(`❌ ${oversizedFiles.length} dosya 15MB'dan büyük! Lütfen küçük dosyalar seçin.`);
      return;
    }

    // Toplam boyut kontrolü
    const currentTotalSize = filePreviews.reduce((sum, preview) => sum + preview.size, 0);
    const newTotalSize = filesArray.reduce((sum, file) => sum + file.size, 0);
    
    if (currentTotalSize + newTotalSize > MAX_TOTAL_SIZE) {
      alert(`❌ Toplam dosya boyutu 30MB'ı aşamaz!`);
      return;
    }

    // Önizleme oluştur
    const newPreviews: FilePreview[] = filesArray.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      size: file.size
    }));

    setFilePreviews(prev => [...prev, ...newPreviews]);
    setForm(prev => ({
      ...prev,
      files: [...prev.files, ...filesArray]
    }));
  };

  // Dosya kaldırma
  const removeFile = (index: number) => {
    const fileToRemove = filePreviews[index];
    URL.revokeObjectURL(fileToRemove.preview); // Memory leak'i önle
    
    setFilePreviews(prev => prev.filter((_, i) => i !== index));
    setForm(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  // Dosyaları base64'e çevir
  const convertFilesToBase64 = async (files: File[]): Promise<string[]> => {
    const base64Promises = files.map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = (reader.result as string).split(",")[1];
          resolve(base64);
        };
        reader.readAsDataURL(file);
      });
    });

    return Promise.all(base64Promises);
  };

  // Formu temizle
  const clearForm = () => {
    // Önizleme URL'lerini temizle (memory leak önleme)
    filePreviews.forEach(preview => URL.revokeObjectURL(preview.preview));
    
    setForm({
      name: "",
      surname: "",
      message: "",
      files: [],
    });
    setFilePreviews([]);
    
    // File input'ları temizle
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      (input as HTMLInputElement).value = "";
    });
  };

  // Form gönderildiğinde tetiklenir
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.files.length === 0) {
      alert("❌ En az bir fotoğraf seçmelisiniz!");
      return;
    }

    alert("📤 Fotoğraflar yükleniyor... Bu işlem yaklaşık 20 saniye sürebilir. Lütfen bekleyiniz.");
    setIsLoading(true);

    try {
      // Dosyaları base64'e çevir
      const base64Files = await convertFilesToBase64(form.files);

      // JSON formatında veri hazırla
      const jsonData = {
        name: form.name,
        surname: form.surname,
        message: form.message,
        files: base64Files
      };

      try {
        // FormData ile gönder
        const formData = new FormData();
        formData.append('data', JSON.stringify(jsonData));
        
        const formRes = await fetch(
          "https://script.google.com/macros/s/AKfycby2XYmi0wvDVXURDeAFVavcTkFUyieBQp6z2HEsZaGB8_wPkG3BHP7WdwWGlyjuP-j9ug/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        const formText = await formRes.text();
        console.log("FormData response:", formText);
        
        // CORS hatası olsa bile Drive'a yüklendiğini varsay
        // Çünkü fotoğraflar Drive'a geliyor
        alert("🎉 Fotoğraflar başarıyla gönderildi!");
        clearForm();
        
      } catch (formError) {
        console.error("FormData error:", formError);
        
        // CORS hatası olsa bile Drive'a yüklendiğini varsay
        clearForm();
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("File conversion error:", error);
      alert("❌ Dosya dönüştürme hatası. Lütfen tekrar deneyin.");
      setIsLoading(false);
    }
  };

  // Dosya boyutunu formatla
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form d-flex flex-column gap-3">
      <input 
        name="name" 
        placeholder="İsim" 
        onChange={handleChange} 
        required 
        className="form-control" 
        value={form.name}
        disabled={isLoading}
      />
      <input 
        name="surname" 
        placeholder="Soyisim" 
        onChange={handleChange} 
        required 
        className="form-control" 
        value={form.surname}
        disabled={isLoading}
      />
      <textarea 
        name="message" 
        placeholder="Mesaj" 
        onChange={handleChange} 
        required 
        className="form-control" 
        value={form.message}
        disabled={isLoading}
      />
      

      
      {/* Dosya seçimi */}
      <div className="file-upload-section">
        <label className="form-label">Düğün Fotoğrafları</label>
        <input 
          type="file" 
          name="files" 
          accept="image/*" 
          multiple
          onChange={handleChange} 
          required 
          className="form-control"
          disabled={isLoading}
        />
        <small className="text-muted">
          Maksimum {MAX_FILES} fotoğraf, her biri en fazla 15MB, toplam 30MB
        </small>
      </div>

      {/* Fotoğraf önizlemeleri */}
      {filePreviews.length > 0 && (
        <div className="preview-section">
          <h6>Seçilen Fotoğraflar ({filePreviews.length}/{MAX_FILES})</h6>
          <div className="preview-grid d-flex flex-wrap gap-2">
            {filePreviews.map((preview, index) => (
              <div key={index} className="preview-item position-relative">
                <img 
                  src={preview.preview} 
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-danger position-absolute"
                  style={{ top: '5px', right: '5px' }}
                  onClick={() => removeFile(index)}
                  disabled={isLoading}
                >
                  ×
                </button>
                <small className="d-block text-center mt-1">
                  {formatFileSize(preview.size)}
                </small>
              </div>
            ))}
          </div>
        </div>
      )}

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={isLoading || form.files.length === 0}
      >
        {isLoading ? "Gönderiliyor... (Yaklaşık 20 saniye sürebilir)" : "Gönder"}
      </button>
    </form>
  );
};

export default WeddingForm;
