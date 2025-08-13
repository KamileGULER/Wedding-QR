import "./Hero.css";
import { siteConfig } from "../site.config";

const pastelGradient = "linear-gradient(120deg, #ffe4ec 0%, #f8e6ec 60%, #eec6d0 100%)";

export default function Hero() {
  return (
    <section
      className="hero hero-particles-bg"
      style={{ background: pastelGradient }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{siteConfig.texts.hero.title}</h1>
        <p className="hero-subtitle">
          {siteConfig.texts.hero.subtitle}
        </p>
      </div>
    </section>
  );
} 