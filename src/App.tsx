import './App.css';
import '@fontsource/inter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import coupleImg from './assets/couple.jpeg';
import gelinDamatImg from './assets/gelindamat.jpeg';
import WeddingForm from './components/WeddingForm';

function App() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Wedding Details Section */}
      <section className="wedding-details-section">
        <div className="container">
          <div className="wedding-card">
            <h2 className="wedding-title">💍 Beyza & Raşit'in Düğününe Davetlisiniz</h2>
            
            <div className="wedding-events">
              <div className="event-item">
                <h3>📅 Kına Gecesi</h3>
                <p><strong>🗓️ 9 Ağustos 2025 Cumartesi, 19:00</strong></p>
                <p>📌 Bağkonak İlkokulu Karşısı, Kız Evinin Önü</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Bağkonak+İlkokulu,+Yalvaç,+Isparta" 
                   target="_blank" rel="noopener noreferrer" className="map-link">
                  📍 Konum
                </a>
              </div>
              
              <div className="event-item">
                <h3>👰 Gelin Alma</h3>
                <p><strong>🗓️ 10 Ağustos 2025 Pazar, 10:00</strong></p>
                <p>📌 Isparta Merkez, Hızırbey Mah. 1549 Sok. Ceddid Sitesi</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Hızırbey+Mahallesi+1549+Sokak,+Isparta" 
                   target="_blank" rel="noopener noreferrer" className="map-link">
                  📍 Konum
                </a>
              </div>
              
              <div className="event-item">
                <h3>🍽️ Yemek & Balo</h3>
                <p><strong>🗓️ 10 Ağustos 2025 Pazar</strong></p>
                <p>🍽️ Yemek: 16:00 – 19:30</p>
                <p>💃 Balo: 20:00</p>
                <p>📌 SAV Düğün Salonu, Merkez / Isparta</p>
                <a href="https://www.google.com/maps/search/?api=1&query=SAV+Düğün+Salonu,+Isparta" 
                   target="_blank" rel="noopener noreferrer" className="map-link">
                  📍 Konum
                </a>
              </div>
            </div>
            
            <div className="contact-info">
              <h3>👨‍👩‍👧 Aileler</h3>
              <p><strong>Mızrak Ailesi:</strong> 0551 991 10 78</p>
              <p><strong>Cömert Ailesi:</strong> 0535 929 31 02</p>
            </div>
          </div>
        </div>
      </section>
      
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
        <WeddingForm />
      </section>
      
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
    </>
  );
}

export default App;
