import { useEffect, useRef } from 'react';
import apiario from '../assets/proveedores/apiario1.jpeg';
import apicultores from '../assets/proveedores/apicultores.jpeg';
import produccion1 from '../assets/proceso/produccion1.jpeg';
import produccion2 from '../assets/proceso/produccion2.jpeg';
import fundador from '../assets/proceso/fundador.jpeg';
import videoComoSeUsa from '../assets/video-como-se-usa.mp4';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Recoleccion de miel',
    desc: 'Trabajamos directamente con apicultores colombianos que cuidan sus colmenas de forma responsable y sostenible.',
    image: apiario,
  },
  {
    num: '02',
    title: 'Cuidado artesanal',
    desc: 'Nuestros apicultores cosechan la miel con respeto por las abejas, garantizando la mas alta calidad y pureza.',
    image: apicultores,
  },
  {
    num: '03',
    title: 'Produccion profesional',
    desc: 'En nuestra planta procesamos cada barra con maquinaria especializada, manteniendo los mas altos estandares de calidad.',
    image: produccion1,
  },
  {
    num: '04',
    title: 'Control de calidad',
    desc: 'Cada lote pasa por revision manual. Nuestro equipo verifica textura, peso y aroma antes del empaque final.',
    image: produccion2,
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('process__step--visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.process__step');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process" id="proceso" ref={sectionRef}>
      <div className="process__container">
        <span className="section-tag">De la colmena a tu cabello</span>
        <h2 className="section-title process__title">Nuestro proceso</h2>
        <p className="section-subtitle">
          Desde el apiario hasta tu bano, cada paso esta pensado para ofrecer calidad real
        </p>

        <div className="process__timeline">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`process__step ${i % 2 === 1 ? 'process__step--reverse' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="process__step-img">
                <img src={step.image} alt={step.title} loading="lazy" />
              </div>
              <div className="process__step-content">
                <span className="process__step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process__video">
          <h3 className="process__video-title">Como usar tu shampoo solido</h3>
          <p className="process__video-sub">Mira lo facil que es incorporarlo a tu rutina</p>
          <div className="process__video-wrap">
            <video
              controls
              preload="metadata"
              playsInline
              poster={fundador}
            >
              <source src={videoComoSeUsa} type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
