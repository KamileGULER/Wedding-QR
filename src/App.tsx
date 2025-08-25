import './App.css';
import '@fontsource/inter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import WeddingForm from './components/WeddingForm';
import Seo from './components/Seo';
import { siteConfig } from './site.config';

function App() {
  return (
    <>
      <Seo />
      
      {/* Hero Section */}
      <Hero />
      
           {/* Wedding Details Section */}
      {/* <section className="wedding-details-section">
        <div className="container">
          <div className="wedding-card">
            <h2 className="wedding-title">💍 {siteConfig.coupleNames.full}'in Düğününe Davetlisiniz</h2>
            
            <div className="wedding-events">
              {siteConfig.events.map((event) => (
                <div key={event.id} className="event-item">
                  <h3>{event.title}</h3>
                  <p><strong>🗓️ {event.date}, {event.time}</strong></p>
                  <p>📌 {event.location}</p>
                  {event.description && (
                    <div className="event-description">
                      {event.description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  )}
                  <a href={event.mapUrl} 
                     target="_blank" rel="noopener noreferrer" className="map-link">
                    📍 Konum
                  </a>
                </div>
              ))}
            </div>
            
            <div className="contact-info">
              <h3>👨‍👩‍👧 Aileler</h3>
              {siteConfig.contacts.map((contact, index) => (
                <p key={index}>
                  <strong>{contact.familyName}:</strong> {contact.phone}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
      {/* How to Use Section */}
      <section className="how-to-section">
        <div className="container">
          <h2 className="section-title">{siteConfig.texts.howToUse.title}</h2>
          <div className="how-to-steps">
            {siteConfig.texts.howToUse.steps.map((step) => (
              <div key={step.number} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
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
          <img src={siteConfig.assets.couple} alt="Düğün Çifti" />
        </div>
        <div className="services-content">
          <div className="services-title">{siteConfig.texts.services.title}</div>
          <div className="services-text">{siteConfig.texts.services.description}</div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            {siteConfig.texts.about.message}
          </div>
        </div>
        <div className="about-photo">
          <img src={siteConfig.assets.about} alt="Gelin ve Damat" className="about-img" />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer-section">
        <div>{siteConfig.texts.footer.thankYou}</div>
        <div className="footer-socials">
          <a href="https://kamileguler.github.io/kamileguler-web-page/" target="_blank" rel="noopener noreferrer" aria-label="View My Projects">
            Anılarınızı Ölümsüzleştirmek için tıklayınız.
          </a>
        </div>
        <div className="footer-credit">
          <span>Designed & Developed by</span>
          <span className="developer-name">{siteConfig.texts.footer.developer}</span>
        </div>
      </footer>
    </>
  );
}

export default App;
