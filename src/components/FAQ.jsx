import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Como se usa?',
    a: 'Humedece el cabello, frota la barra en las manos o directamente sobre el cabello, masajea y enjuaga.',
  },
  {
    q: 'Como lo conservo para que dure mas?',
    a: 'Dejalo secar en una jabonera con drenaje, lejos del chorro directo. Entre mas se seque, mas dura.',
  },
  {
    q: 'Cuanto dura?',
    a: '70 g: 35-58 lavadas aprox. / 20 g: 10-16 lavadas aprox. (segun uso).',
  },
  {
    q: 'Para que tipo de cabello es?',
    a: 'Es una opcion de uso diario pensada para una rutina practica y premium. Si nos cuentas tu necesidad por WhatsApp, te orientamos.',
  },
  {
    q: 'Hace buena espuma?',
    a: 'Si. Genera espuma cremosa para una experiencia comoda y premium.',
  },
  {
    q: 'Es para toda la familia?',
    a: 'Si, es ideal para una rutina diaria en casa.',
  },
  {
    q: 'Puedo comprar para hoteleria o glamping?',
    a: 'Si. Tenemos presentacion de 20 g ideal para amenidades premium. Escribenos para cotizar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <span className="section-tag">Preguntas frecuentes</span>
        <h2 className="section-title faq__title">Resolvemos tus dudas</h2>

        <div className="faq__list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className="faq__chevron"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="faq__answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
