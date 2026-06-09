import shampoo from '../assets/products/shampoo-hexagonal.jpeg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-pattern">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero__hexagon" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__tag">Desde 2022 — Innovacion continua</span>
          <h1 className="hero__title">
            Shampoo solido premium
            <br />
            <span className="hero__title-accent">con miel</span>
          </h1>
          <p className="hero__description">
            Cabello limpio, brillante y suave — con una formula mas limpia, sin quimicos contaminantes.
            Lujo consciente para tu rutina.
          </p>
          <div className="hero__cta">
            <a href="#productos" className="btn btn--primary">
              Comprar ahora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="https://wa.me/573180775959" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              WhatsApp
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>35-58</strong>
              <span>Lavadas (70g)</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>0</strong>
              <span>Plasticos</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Reciclable</span>
            </div>
          </div>

          <p className="hero__band">Para toda la familia &bull; Amable con el agua &bull; Proceso controlado</p>
        </div>

        <div className="hero__image">
          <div className="hero__image-glow" />
          <img src={shampoo} alt="Shampoo solido HoneyB hexagonal con abeja grabada" />
        </div>
      </div>
    </section>
  );
}
