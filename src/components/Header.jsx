import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import logo from '../assets/brand/logo-original.png';
import './Header.css';

export default function Header() {
  const { totalItems, subtotal, toggleDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const formatPrice = (p) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(p);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <img src={logo} alt="Honey'B Natural Cosmetics" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>Beneficios</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>

        <div className="header__actions">
          {/* Barra de totales - sincronizacion multipunto */}
          {totalItems > 0 && (
            <span className="header__subtotal">
              {formatPrice(subtotal)}
            </span>
          )}

          <button className="header__cart-btn" onClick={toggleDrawer} aria-label="Abrir carrito">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {/* Contador en header - sincronizacion multipunto */}
            {totalItems > 0 && (
              <span className="header__cart-badge" key={totalItems}>
                {totalItems}
              </span>
            )}
          </button>

          <button
            className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
