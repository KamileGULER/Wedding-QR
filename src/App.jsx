import { useState } from 'react';
import './App.css';
import '@fontsource/inter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Hero from './components/Hero';
import coupleImg from './assets/couple.jpeg';
import gelinDamatImg from './assets/gelindamat.jpeg';

function SectionDivider() {
  return (
    <div className="section-divider">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,0 C480,60 960,0 1440,60 L1440,60 L0,60 Z" fill="#fff7f0"/>
      </svg>
    </div>
  );
}

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  // Upload handlers
  const handlePhoto = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
    
    const readers = files.map(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreviews(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
      return reader;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if either photos or message is provided
    if (photos.length === 0 && message.trim() === '') {
      setModalTitle('Uyarı');
      setModalMessage('Lütfen en az bir fotoğraf veya mesaj ekleyin!');
      setShowModal(true);
      return;
    }
    
    setModalTitle('Teşekkürler! 💕');
    setModalMessage('Düğünümüze katıldığınız ve bu özel günümüzde anı bıraktığınız için çok teşekkür ederiz. Sizinle paylaştığımız her an bizim için çok değerli! 💒✨');
    setShowModal(true);
    setPhotos([]);
    setPhotoPreviews([]);
    setMessage('');
  };

  return (
    <div>
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
        <form className="upload-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label className="form-label">Fotoğraf Yükle:</label>
            <input
              type="file"
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
              className="upload-input"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Kısa bir mesaj bırakın..."
              rows={3}
              maxLength={250}
            />
          </div>
          <button className="upload-btn" type="submit">Gönder</button>
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
            Ayşe & Mehmet'in bu özel gününde bizimle olduğunuz için çok mutluyuz. Katılımınız ve güzel dilekleriniz için teşekkür ederiz!
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
    </div>
  );
}
