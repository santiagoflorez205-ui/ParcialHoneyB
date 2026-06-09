import logo from '../assets/brand/logo-amarillo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Honey'B" className="footer__logo" />
          <p className="footer__tagline">
            Cabello premium, impacto real. Shampoo solido premium con miel, hecho en Colombia.
          </p>
          <div className="footer__social">
            <a href="https://www.instagram.com/honeyb_natural_cosmetics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@honeyb_natural_cosmetics" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
              </svg>
            </a>
            <a href="https://wa.me/573180775959" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Navegacion</h4>
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#proceso">Proceso</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer__links">
          <h4>Aromas</h4>
          <a href="#productos">Lino Blanco</a>
          <a href="#productos">Flor de Cafe</a>
          <a href="#productos">Bosque Andino</a>
          <a href="#productos">Formato 20g Viaje</a>
        </div>

        <div className="footer__links">
          <h4>Contacto</h4>
          <a href="mailto:honeybcorporativo@gmail.com">honeybcorporativo@gmail.com</a>
          <a href="https://wa.me/573180775959" target="_blank" rel="noopener noreferrer">+57 318 077 5959</a>
          <a href="#">Bucaramanga, Colombia</a>
          <a href="#">Envios nacionales e internacionales</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 HONEY'B S.A.S. Natural Cosmetics. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
