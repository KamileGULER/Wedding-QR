import "./Hero.css";
import { HeroProps } from "@/types";

const pastelGradient = "linear-gradient(120deg, #ffe4ec 0%, #f8e6ec 60%, #eec6d0 100%)";

export default function Hero({ title = "Raşit & Beyza", subtitle = "Düğünümüze hoş geldiniz. Fotoğraf ve mesajlarınızı bizimle paylaşabilirsiniz." }: HeroProps) {
  return (
    <section
      className="hero hero-particles-bg"
      style={{ background: pastelGradient }}
    >

      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">
          {subtitle}
        </p>
      </div>
    </section>
  );
} 