import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product, index }) {
  const { addItem } = useCart();

  const formatPrice = (p) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(p);

  return (
    <article
      className="product-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="product-card__image-wrap">
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <div className="product-card__overlay">
          <button
            className="product-card__add-btn"
            onClick={() => addItem(product)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className="product-card__info">
        <div className="product-card__tags">
          {product.ingredients.slice(0, 3).map(ing => (
            <span key={ing} className="product-card__ingredient">{ing}</span>
          ))}
        </div>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <button
            className="product-card__cart-icon"
            onClick={() => addItem(product)}
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
