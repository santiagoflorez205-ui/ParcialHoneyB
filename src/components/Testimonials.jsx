import videoTest1 from '../assets/video-testimonio1.mp4';
import videoTest2 from '../assets/video-testimonio2.mp4';
import './Testimonials.css';

const reviews = [
  {
    text: 'Me encanto HoneyB: en mi cabello crespo me ayuda a mantener los rizos hidratados y, aunque tengo la piel muy seca y alergica, me funciono super bien. Lo recomiendo.',
    author: 'Cliente HoneyB',
    location: 'Bucaramanga',
  },
  {
    text: 'Descubri este shampoo solido de miel en Colombia y me encanto. Es realmente genial: lo recomiendo 100%. Vive la experiencia HoneyB!',
    author: 'Cliente internacional',
    location: 'Francia',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__container">
        <span className="section-tag">Testimonios</span>
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">
          Experiencias reales de personas que ya probaron HoneyB
        </p>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--honey)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-card__text">"{r.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <strong>{r.author}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__videos">
          <h3 className="testimonials__videos-title">Video testimonios</h3>
          <div className="testimonials__videos-grid">
            <div className="testimonials__video-wrap">
              <video controls preload="metadata" playsInline>
                <source src={videoTest1} type="video/mp4" />
              </video>
            </div>
            <div className="testimonials__video-wrap">
              <video controls preload="metadata" playsInline>
                <source src={videoTest2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <p className="testimonials__disclaimer">
          HoneyB ha evolucionado desde 2022. Algunos testimonios pueden mostrar presentaciones anteriores;
          hoy contamos con una formula optimizada y una experiencia mas consistente.
        </p>
      </div>
    </section>
  );
}
