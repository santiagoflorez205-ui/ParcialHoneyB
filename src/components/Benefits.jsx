import { useEffect, useRef } from 'react';
import './Benefits.css';

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Experiencia Premium',
    desc: 'No es un jabon: es un shampoo solido con espuma cremosa, aromas sofisticados y una experiencia de cuidado real.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Formula mas Limpia',
    desc: 'Sin sulfatos, sin parabenos, sin siliconas. Ingredientes naturales como miel de abejas, romero y curcuma.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Rinde Muchisimo',
    desc: '70g = 35-58 lavadas, lo que equivale a 2-3 botellas convencionales. Empaque 100% reciclable, cero plastico.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Hecho en Colombia',
    desc: 'Produccion artesanal con miel de la Fundacion Skambra en Tierralta, Cordoba. Impacto social real.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Perfecto para Viajar',
    desc: 'Compacto, liviano y sin liquidos. Formato 20g ideal para equipaje de mano, hoteleria y glamping.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-4.97 0-9 2.69-9 6v1c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1h1v4h4v-4h2v4h4v-4h1c.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V9c0-3.31-4.03-6-9-6z"/>
      </svg>
    ),
    title: 'Para toda la Familia',
    desc: 'Ideal para la rutina diaria en casa. Amable con el agua, con el cabello y con la piel sensible.',
  },
];

export default function Benefits() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('benefits__card--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.benefits__card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits" id="beneficios" ref={sectionRef}>
      <div className="benefits__container">
        <span className="section-tag">Por que HoneyB</span>
        <h2 className="section-title">Cabello premium, impacto real</h2>
        <p className="section-subtitle">
          Shampoo solido premium con miel, hecho en Colombia. No es un jabon: es una experiencia.
        </p>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefits__card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="benefits__icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
