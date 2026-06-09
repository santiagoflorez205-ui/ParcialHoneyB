import logo from '../assets/brand/logo-amarillo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Honey'B" className="footer__logo" />
          <p className="footer__tagline">
            Cosmetica natural artesanal colombiana. Cuidado real para tu cabello, cero dano al planeta.
          </p>
          <div className="footer__social">
            <a href="https://www.instagram.com/honeyb_col/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
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
          <a href="#beneficios">Beneficios</a>
          <a href="#nosotros">Nosotros</a>
        </div>

        <div className="footer__links">
          <h4>Productos</h4>
          <a href="#productos">Shampoo Original</a>
          <a href="#productos">Shampoo Romero</a>
          <a href="#productos">Shampoo Nutricion</a>
          <a href="#productos">Pack Familiar</a>
        </div>

        <div className="footer__links">
          <h4>Contacto</h4>
          <a href="mailto:info@honeybcol.com">info@honeybcol.com</a>
          <a href="#">Bogota, Colombia</a>
          <a href="#">Envios a todo el pais</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 Honey'B Natural Cosmetics. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
