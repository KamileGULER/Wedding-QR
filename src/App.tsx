import { useState } from 'react';
import './App.css';
import '@fontsource/inter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import coupleImg from './assets/couple.jpeg';
import gelinDamatImg from './assets/gelindamat.jpeg';


function WeddingApp() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tempMessage, setTempMessage] = useState('');
  const [showTempMessage, setShowTempMessage] = useState(false);

  // Rate limiting için
  const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 dakika
  const MAX_POSTS_PER_WINDOW = 3; // 5 dakikada maksimum 3 post

  const checkRateLimit = () => {
    const now = Date.now();
    const recentPosts = JSON.parse(localStorage.getItem('recentPosts') || '[]');
    
    // Son 5 dakikadaki postları filtrele
    const validPosts = recentPosts.filter((postTime: number) => 
      now - postTime < RATE_LIMIT_WINDOW
    );
    
    if (validPosts.length >= MAX_POSTS_PER_WINDOW) {
      const oldestPost = Math.min(...validPosts);
      const timeLeft = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestPost)) / 1000 / 60);
      return {
        allowed: false,
        timeLeft: timeLeft
      };
    }
    
    return { allowed: true };
  };

  const updateRateLimit = () => {
    const now = Date.now();
    const recentPosts = JSON.parse(localStorage.getItem('recentPosts') || '[]');
    
    // Son 5 dakikadaki postları filtrele
    const validPosts = recentPosts.filter((postTime: number) => 
      now - postTime < RATE_LIMIT_WINDOW
    );
    
    // Yeni post zamanını ekle
    validPosts.push(now);
    localStorage.setItem('recentPosts', JSON.stringify(validPosts));
  };

  // Input sanitization için
  const sanitizeInput = (input: string) => {
    if (typeof input !== 'string') return '';
    
    // HTML tag'lerini kaldır
    const div = document.createElement('div');
    div.textContent = input;
    let sanitized = div.innerHTML;
    
    // Tehlikeli karakterleri escape et
    sanitized = sanitized
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
    
    return sanitized;
  };

  const validateMessage = (message: string) => {
    if (!message || typeof message !== 'string') return false;
    
    // Çok uzun mesajları engelle
    if (message.length > 500) return false;
    
    // Tehlikeli pattern'ları kontrol et
    const dangerousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i
    ];
    
    return !dangerousPatterns.some(pattern => pattern.test(message));
  };

  // İsim-soyisim doğrulama fonksiyonu
  const validateNameInMessage = (message: string) => {
    if (!message || typeof message !== 'string') return false;
    
    // Mesajı kelimelere ayır
    const words = message.trim().split(/\s+/);
    
    // En az 2 kelime olmalı (isim ve soyisim)
    if (words.length < 2) return false;
    
    // Her kelime en az 2 karakter olmalı
    const validWords = words.filter(word => word.length >= 2);
    
    // En az 2 geçerli kelime olmalı
    return validWords.length >= 2;
  };

  // Upload handlers
  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;
    
    const files = Array.from(fileList);
    
    // Dosya türü kontrolü
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const invalidFiles = files.filter((file: File) => !allowedTypes.includes(file.type));
    
    if (invalidFiles.length > 0) {
      setModalTitle('Hata');
      setModalMessage('Sadece JPG, PNG, GIF ve WebP formatında dosyalar yükleyebilirsiniz.');
      setShowModal(true);
      return;
    }
    
    // Dosya boyutu kontrolü (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    const oversizedFiles = files.filter((file: File) => file.size > maxSize);
    
    if (oversizedFiles.length > 0) {
      setModalTitle('Hata');
      setModalMessage('Dosya boyutu 5MB\'dan büyük olamaz. Lütfen daha küçük dosyalar seçin.');
      setShowModal(true);
      return;
    }
    
    // Toplam dosya sayısı kontrolü (5 dosya limit)
    if (files.length > 5) {
      alert('En fazla 5 dosya seçebilirsiniz.');
      return;
    }
    
    // Dosya adı kontrolü (zararlı karakterler)
    const invalidNames = files.filter(file => {
      const fileName = file.name.toLowerCase();
      const dangerousPatterns = [
        /\.(exe|bat|cmd|com|pif|scr|vbs|js|jar|msi|dll|sys|bin)$/i,
        /[<>:"/\\|?*]/,
        /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i
      ];
      return dangerousPatterns.some(pattern => pattern.test(fileName));
    });
    
    if (invalidNames.length > 0) {
      setModalTitle('Hata');
      setModalMessage('Dosya adında geçersiz karakterler var. Lütfen dosya adını değiştirin.');
      setShowModal(true);
      return;
    }
    
    // Dosya içeriği kontrolü (Magic Number)
    const validateImageContent = (file: File) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (!result || typeof result === 'string') {
            resolve(false);
            return;
          }
          const arr = new Uint8Array(result).subarray(0, 4);
          let header = '';
          for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }
          
          // JPEG, PNG, GIF, WebP magic numbers
          const validHeaders = [
            'ffd8ff', // JPEG
            '89504e47', // PNG
            '47494638', // GIF
            '52494646' // WebP (simplified)
          ];
          
          resolve(validHeaders.some(h => header.startsWith(h)));
        };
        reader.readAsArrayBuffer(file);
      });
    };
    
    // Validate all files
    Promise.all(files.map(validateImageContent)).then(results => {
      const invalidContent = results.filter(valid => !valid);
      if (invalidContent.length > 0) {
        setModalTitle('Hata');
        setModalMessage('Bazı dosyalar geçerli resim dosyaları değil. Lütfen kontrol edin.');
        setShowModal(true);
        return;
      }
      
      // All validations passed
      setPhotos(files);
      
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setPhotoPreviews(prev => [...prev, reader.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting kontrolü
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setModalTitle('Hız Limiti');
      setModalMessage(`Çok hızlı post gönderiyorsunuz. Lütfen ${rateLimitCheck.timeLeft} dakika bekleyin.`);
      setShowModal(true);
      return;
    }
    
    // Check if either photos or message is provided
    if (photos.length === 0 && message.trim() === '') {
      setModalTitle('Uyarı');
      setModalMessage('Lütfen en az bir fotoğraf veya mesaj ekleyin!');
      setShowModal(true);
      return;
    }
    
    // Mesaj validasyonu
    if (message.trim() && !validateMessage(message)) {
      setModalTitle('Güvenlik Hatası');
      setModalMessage('Mesajınızda geçersiz karakterler var. Lütfen kontrol edin.');
      setShowModal(true);
      return;
    }
    
    // İsim-soyisim doğrulaması
    if (message.trim() && !validateNameInMessage(message)) {
      setModalTitle('Eksik Bilgi');
      setModalMessage('Lütfen adınızı ve soyadınızı içeren bir mesaj yazın');
      setShowModal(true);
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Create FormData for multipart/form-data
      const formData = new FormData();
      
      // Add message if provided
      if (message.trim()) {
        formData.append('message', message.trim());
      }
      
      // Add photos if provided
      if (photos.length > 0) {
        photos.forEach((photo, index) => {
          formData.append('photo', photo);
        });
      }
      
      // Send to Basin endpoint
      const response = await fetch('https://usebasin.com/f/ad5ae0b70aeb', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // Update rate limiting
        updateRateLimit();
        
        // Show success message
        setTempMessage('✅ Gönderildi!');
        setShowTempMessage(true);
        
        // Hide message after 4 seconds
        setTimeout(() => {
          setShowTempMessage(false);
        }, 4000);
        
        // Reset form
        setPhotos([]);
        setPhotoPreviews([]);
        setMessage('');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setTempMessage('❌ Hata oluştu');
      setShowTempMessage(true);
      
      // Hide message after 4 seconds
      setTimeout(() => {
        setShowTempMessage(false);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* How to Use Section */}
      <section className="how-to-section">
        <div className="container">
          <h2 className="section-title">Nasıl Kullanılır?</h2>
          <div className="how-to-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Fotoğraf Seçin</h3>
                <p>Düğün anılarınızdan fotoğraflarınızı seçin. Birden fazla fotoğraf yükleyebilirsiniz.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Mesaj Yazın</h3>
                <p>İsteğe bağlı olarak kısa bir mesaj yazabilirsiniz. Fotoğraf veya mesajdan en az biri gereklidir.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Gönderin</h3>
                <p>Formu doldurduktan sonra "Gönder" butonuna tıklayarak anılarınızı paylaşın.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upload Section */}
      <section className="upload-section">
        <div className="icon-row">
          <div className="upload-icon">
            <i className="fas fa-camera-retro"></i>
            <p>Fotoğraf</p>
          </div>
          <div className="upload-icon">
            <i className="fas fa-comment-dots"></i>
            <p>Mesaj</p>
          </div>
        </div>
        {showTempMessage && (
          <div style={{
            padding: '10px',
            margin: '10px 0',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: tempMessage.includes('✅') ? '#d4edda' : '#f8d7da',
            color: tempMessage.includes('✅') ? '#155724' : '#721c24',
            border: `1px solid ${tempMessage.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            {tempMessage}
          </div>
        )}
        <form className="upload-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label className="form-label">Fotoğraf Yükle:</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              multiple
              className="upload-input"
              onChange={handlePhoto}
            />
          </div>
          {photoPreviews.length > 0 && (
            <div className="upload-preview">
              {photoPreviews.map((preview, index) => (
                <img key={index} src={preview} alt={`Yüklenen fotoğraf önizlemesi ${index + 1}`} />
              ))}
            </div>
          )}
          <div className="form-group">
            <label className="form-label">Mesajınız:</label>
            <textarea
              name="message"
              className="upload-input"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Lütfen mesajınızı yazın (isim ve soyisim dahil)"
              rows={3}
              maxLength={250}
            />
          </div>
          <button className="upload-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Yükleniyor...' : 'Gönder'}
          </button>
        </form>
      </section>
      
      <SectionDivider />
      
      {/* Services Section */}
      <section className="services-section">
        <div className="services-photo">
          <img src={coupleImg} alt="Düğün Çifti" />
        </div>
        <div className="services-content">
          <div className="services-title">Anılarınızı Paylaşın</div>
          <div className="services-text">Düğünümüzden fotoğraflarınızı ve sesli dileklerinizi yükleyerek bu özel günü ölümsüzleştirin. Kısa bir mesaj bırakmayı unutmayın!</div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            Raşit & Beyza'nın bu özel gününde bizimle olduğunuz için çok mutluyuz. Katılımınız ve güzel dilekleriniz için teşekkür ederiz!
          </div>
        </div>
        <div className="about-photo">
          <img src={gelinDamatImg} alt="Gelin ve Damat" className="about-img" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer-section">
        <div>Teşekkür ederiz! 💖</div>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram"><span role="img" aria-label="Instagram">📸</span></a>
          <a href="#" aria-label="WhatsApp"><span role="img" aria-label="WhatsApp">💬</span></a>
        </div>
        <div className="footer-credit">
          <span>Designed & Developed by</span>
          <span className="developer-name">Kamile Güler</span>
        </div>
      </footer>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Tamam
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default function App() {


  return (
    <div>
      <WeddingApp />

    </div>
  );
}
