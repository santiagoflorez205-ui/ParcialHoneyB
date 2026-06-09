import { useState } from 'react';
import { useCart } from '../context/CartContext';
import PaymentModal from './PaymentModal';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalItems, subtotal, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const formatPrice = (p) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(p);

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'cart-overlay--visible' : ''}`}
        onClick={closeDrawer}
      />

      <aside className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}>
        <div className="cart-drawer__header">
          <div>
            <h2 className="cart-drawer__title">Tu Carrito</h2>
            {/* Contador en drawer - sincronizacion multipunto */}
            <span className="cart-drawer__count">
              {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
            </span>
          </div>
          <button className="cart-drawer__close" onClick={closeDrawer} aria-label="Cerrar carrito">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <div className="cart-drawer__empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <p>Tu carrito esta vacio</p>
            <span>Agrega productos para comenzar</span>
            <button className="btn btn--primary" onClick={closeDrawer}>
              Ver Productos
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__info">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <span className="cart-item__unit-price">
                      {formatPrice(item.price)} c/u
                    </span>
                    <div className="cart-item__controls">
                      <div className="cart-item__quantity">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Disminuir cantidad"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </button>
                      </div>
                      {/* Subtotal por item - se actualiza en vivo */}
                      <span className="cart-item__subtotal">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Barra de totales en drawer - sincronizacion multipunto */}
            <div className="cart-drawer__footer">
              <button className="cart-drawer__clear" onClick={clearCart}>
                Vaciar carrito
              </button>

              <div className="cart-drawer__summary">
                <div className="cart-drawer__summary-row">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="cart-drawer__summary-row">
                  <span>Envio</span>
                  <span className="cart-drawer__free">Gratis</span>
                </div>
                <div className="cart-drawer__summary-row cart-drawer__total">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <button className="btn btn--primary cart-drawer__checkout" onClick={() => setShowPayment(true)}>
                Finalizar Compra
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </>
        )}

        <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} />
      </aside>
    </>
  );
}
