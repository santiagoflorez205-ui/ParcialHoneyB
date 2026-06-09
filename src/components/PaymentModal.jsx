import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { QRCodeSVG } from 'qrcode.react';
import { useCart } from '../context/CartContext';
import './PaymentModal.css';

const PAYPAL_CLIENT_ID = 'sb'; // sandbox test ID

export default function PaymentModal({ isOpen, onClose }) {
  const { subtotal, totalItems, clearCart } = useCart();
  const [method, setMethod] = useState(null); // null | 'paypal' | 'nequi'
  const [paypalSuccess, setPaypalSuccess] = useState(false);

  const formatPrice = (p) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(p);

  // Convert COP to USD for PayPal sandbox (approximate rate)
  const usdAmount = (subtotal / 4200).toFixed(2);

  const qrUrl = `${window.location.origin}/pago-en-proceso.html`;

  const handleClose = () => {
    setMethod(null);
    setPaypalSuccess(false);
    onClose();
  };

  const handlePaypalSuccess = () => {
    setPaypalSuccess(true);
    setTimeout(() => {
      clearCart();
      handleClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="payment-overlay" onClick={handleClose} />
      <div className="payment-modal">
        <button className="payment-modal__close" onClick={handleClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {paypalSuccess ? (
          <div className="payment-modal__success">
            <div className="payment-modal__success-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Pago exitoso!</h3>
            <p>Tu pedido ha sido procesado correctamente (sandbox).</p>
          </div>
        ) : !method ? (
          <>
            <h3 className="payment-modal__title">Elige tu metodo de pago</h3>
            <div className="payment-modal__summary">
              <span>{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div className="payment-modal__methods">
              <button className="payment-method" onClick={() => setMethod('paypal')}>
                <div className="payment-method__icon payment-method__icon--paypal">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 2.56A.859.859 0 015.79 1.84h6.573c2.175 0 3.752.58 4.674 1.728.432.537.708 1.13.826 1.768.124.668.126 1.465.006 2.435l-.013.089v.252l.194.11c.33.173.596.381.804.627.295.348.486.78.569 1.282.086.516.056 1.13-.088 1.826-.166.798-.434 1.492-.797 2.065a4.28 4.28 0 01-1.257 1.34c-.49.328-1.07.571-1.723.72-.636.146-1.363.22-2.16.22H13.02a.859.859 0 00-.848.737l-.025.152-.466 2.952-.02.107a.642.642 0 01-.634.547H7.076z"/>
                  </svg>
                </div>
                <div className="payment-method__info">
                  <strong>PayPal</strong>
                  <span>Pago seguro con PayPal Sandbox</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>

              <button className="payment-method" onClick={() => setMethod('nequi')}>
                <div className="payment-method__icon payment-method__icon--nequi">
                  <span>N</span>
                </div>
                <div className="payment-method__info">
                  <strong>Nequi</strong>
                  <span>Escanea el codigo QR para pagar</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>

            <p className="payment-modal__disclaimer">
              Modo sandbox / demo — no se realizaran cargos reales.
            </p>
          </>
        ) : method === 'paypal' ? (
          <div className="payment-modal__paypal">
            <button className="payment-modal__back" onClick={() => setMethod(null)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="19 12 5 12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Volver
            </button>
            <h3 className="payment-modal__title">Pagar con PayPal</h3>
            <div className="payment-modal__summary">
              <span>Total</span>
              <strong>{formatPrice(subtotal)} (~${usdAmount} USD)</strong>
            </div>
            <div className="payment-modal__paypal-buttons">
              <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'USD' }}>
                <PayPalButtons
                  style={{ layout: 'vertical', shape: 'rect', label: 'pay' }}
                  createOrder={(_data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: { value: usdAmount },
                        description: `HoneyB - ${totalItems} productos`,
                      }],
                    });
                  }}
                  onApprove={(_data, actions) => {
                    return actions.order.capture().then(() => {
                      handlePaypalSuccess();
                    });
                  }}
                  onError={() => {
                    alert('Error en el pago. Intenta de nuevo.');
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        ) : (
          <div className="payment-modal__nequi">
            <button className="payment-modal__back" onClick={() => setMethod(null)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="19 12 5 12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Volver
            </button>
            <h3 className="payment-modal__title">Pagar con Nequi</h3>
            <div className="payment-modal__summary">
              <span>Total a pagar</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="payment-modal__qr">
              <QRCodeSVG
                value={qrUrl}
                size={200}
                bgColor="#ffffff"
                fgColor="#2c1810"
                level="M"
                includeMargin
              />
            </div>
            <p className="payment-modal__qr-hint">
              Escanea este codigo QR con tu app de Nequi
            </p>
            <span className="payment-modal__qr-badge">Sandbox / Demo</span>
          </div>
        )}
      </div>
    </>
  );
}
