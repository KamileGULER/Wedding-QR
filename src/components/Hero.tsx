import "./Hero.css";
import { siteConfig } from "../site.config";

export default function Hero() {
  return (
    <section
      className="hero hero-particles-bg"
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