import { useEffect, useRef } from 'react';
import ciudad from '../assets/gallery/ciudad.jpg';
import arena from '../assets/gallery/arena.jpg';
import piscina from '../assets/gallery/piscina.jpg';
import arena2 from '../assets/gallery/arena2.jpg';
import cajas from '../assets/gallery/cajas.jpg';
import barra from '../assets/gallery/barra.jpg';
import cascada from '../assets/gallery/cascada.jpg';
import mar from '../assets/gallery/mar.jpg';
import lifestyle3 from '../assets/gallery/lifestyle3.jpg';
import lifestyle4 from '../assets/gallery/lifestyle4.jpg';
import './Gallery.css';

const images = [
  { src: cajas, alt: 'Cajas hexagonales Honey\'B empacadas', span: 'wide' },
  { src: ciudad, alt: 'Honey\'B en la ciudad', span: 'normal' },
  { src: arena, alt: 'Shampoo solido en arena negra con algas', span: 'normal' },
  { src: barra, alt: 'Barra de shampoo sobre cajas hexagonales', span: 'tall' },
  { src: piscina, alt: 'Shampoo solido en piscina tropical', span: 'normal' },
  { src: arena2, alt: 'Shampoo solido en la arena de playa', span: 'normal' },
  { src: cascada, alt: 'Honey\'B en cascada natural', span: 'normal' },
  { src: mar, alt: 'Producto junto al mar', span: 'normal' },
  { src: lifestyle3, alt: 'Estilo de vida Honey\'B', span: 'wide' },
  { src: lifestyle4, alt: 'Honey\'B lifestyle', span: 'normal' },
];

export default function Gallery() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gallery__item--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = gridRef.current?.querySelectorAll('.gallery__item');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery" id="galeria">
      <div className="gallery__container">
        <span className="section-tag">Galeria</span>
        <h2 className="section-title gallery__title">Honey'B en el mundo</h2>
        <p className="section-subtitle">
          Nuestro shampoo solido viaja con personas reales a lugares increibles
        </p>

        <div className="gallery__grid" ref={gridRef}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery__item gallery__item--${img.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
