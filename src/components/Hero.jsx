import React, { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Hero.css";

const pastelGradient = "linear-gradient(120deg, #ffe4ec 0%, #f8e6ec 60%, #eec6d0 100%)";
const flowerEmojis = ["🌸", "🌺", "💮"];

export default function Hero() {
  const [interaction, setInteraction] = useState("repulse");

  // Particles config
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    particles: {
      number: { value: 24, density: { enable: true, area: 800 } },
      color: { value: ["#e573b7", "#f7b2d9", "#b5838d"] },
      shape: {
        type: "char",
        character: flowerEmojis.map((emoji) => ({ value: emoji, font: "Arial", style: "", weight: "bold" })),
      },
      opacity: { value: 0.85 },
      size: { value: 32, random: { enable: true, minimumValue: 24 } },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: false },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: interaction,
        },
        resize: true,
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        attract: { distance: 120, duration: 0.6, factor: 1 },
        grab: { distance: 120 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      className="hero hero-particles-bg"
      style={{ background: pastelGradient }}
    >
      <Particles
        id="tsparticles"
        className="hero-particles-canvas"
        init={particlesInit}
        options={particlesOptions}
      />
      <div className="hero-content">
        <h1 className="hero-title">Ayşe & Mehmet</h1>
        <p className="hero-subtitle">
          Düğünümüze hoş geldiniz. Fotoğraf, mesaj ve sesli dileklerinizi bizimle paylaşabilirsiniz.
        </p>
      </div>
    </section>
  );
} 