import { useState } from 'react';
import './App.css';
import '@fontsource/inter';
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
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [audio, setAudio] = useState(null);

  // Upload handlers
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };
  const handleAudio = (e) => setAudio(e.target.files[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Teşekkür ederiz!');
    setPhoto(null);
    setPhotoPreview(null);
    setMessage('');
    setAudio(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <SectionDivider />
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
          <div className="upload-icon">
            <i className="fas fa-microphone"></i>
            <p>Ses</p>
          </div>
        </div>
        <form className="upload-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label className="form-label">Fotoğraf Yükle:</label>
            <input
              type="file"
              accept="image/*"
              className="upload-input"
              onChange={handlePhoto}
            />
          </div>
          {photoPreview && (
            <div className="upload-preview">
              <img src={photoPreview} alt="Yüklenen fotoğraf önizlemesi" />
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
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Sesli Mesaj Yükle:</label>
            <input
              type="file"
              accept="audio/*"
              className="upload-input"
              onChange={handleAudio}
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
    </div>
  );
}
