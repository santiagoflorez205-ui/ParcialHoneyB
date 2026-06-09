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
          <span className="hero__tag">Natural Cosmetics</span>
          <h1 className="hero__title">
            Cuida tu cabello,
            <br />
            <span className="hero__title-accent">cuida el planeta</span>
          </h1>
          <p className="hero__description">
            Shampoo solido artesanal elaborado con miel pura, curcuma y romero.
            Sin plasticos, sin toxicos, sin sulfatos. Tu cabello merece lo mejor de la naturaleza.
          </p>
          <div className="hero__cta">
            <a href="#productos" className="btn btn--primary">
              Ver Productos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#nosotros" className="btn btn--ghost">Nuestra Historia</a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>3x</strong>
              <span>Mas duradero</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>0</strong>
              <span>Plasticos</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Natural</span>
            </div>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-glow" />
          <img src={shampoo} alt="Shampoo solido HoneyB hexagonal con abeja grabada" />
        </div>
      </div>
    </section>
  );
}
