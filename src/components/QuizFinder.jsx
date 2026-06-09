import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import './QuizFinder.css';

const steps = [
  {
    id: 'hair-type',
    question: 'Cual es tu tipo de cabello?',
    subtitle: 'Selecciona el que mejor te describa',
    options: [
      { value: 'normal', label: 'Normal', icon: '1', desc: 'Equilibrado, sin exceso de grasa ni resequedad' },
      { value: 'graso', label: 'Graso', icon: '2', desc: 'Tiende a verse oleoso rapidamente' },
      { value: 'seco', label: 'Seco / Crespo', icon: '3', desc: 'Se siente aspero, con frizz y puntas abiertas' },
      { value: 'debil', label: 'Debil / Fino', icon: '4', desc: 'Se cae facilmente o se quiebra' },
    ],
  },
  {
    id: 'concern',
    question: 'Que te preocupa mas de tu cabello?',
    subtitle: 'Elige tu principal preocupacion',
    options: [
      { value: 'brillo', label: 'Falta de brillo', icon: 'A', desc: 'Quiero que se vea luminoso y saludable' },
      { value: 'hidratacion', label: 'Hidratacion', icon: 'B', desc: 'Necesito rizos definidos e hidratados' },
      { value: 'frizz', label: 'Frizz y resequedad', icon: 'C', desc: 'Se esponja y no puedo controlarlo' },
      { value: 'frescura', label: 'Frescura y limpieza', icon: 'D', desc: 'Quiero una sensacion de spa' },
    ],
  },
  {
    id: 'aroma',
    question: 'Que aroma prefieres?',
    subtitle: 'Tres aromas inspirados en Colombia',
    options: [
      { value: 'lino-blanco', label: 'Lino Blanco', icon: '\u2736', desc: 'Limpio, minimalista y universal' },
      { value: 'flor-cafe', label: 'Flor de Cafe', icon: '\u2741', desc: 'Sofisticado, fino y muy colombiano' },
      { value: 'bosque-andino', label: 'Bosque Andino', icon: '\u2618', desc: 'Verde, fresco y revitalizante' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'Como es tu estilo de vida?',
    subtitle: 'Esto nos ayuda a encontrar el formato ideal',
    options: [
      { value: 'viajero', label: 'Viajero frecuente', icon: '\u2708', desc: 'Necesito algo compacto y portatil' },
      { value: 'familia', label: 'Para toda la familia', icon: '\u2665', desc: 'Buscamos una opcion para todos en casa' },
      { value: 'hoteleria', label: 'Hoteleria / Glamping', icon: '\u2726', desc: 'Amenidad premium para huespedes' },
      { value: 'premium', label: 'Busco lo mejor', icon: '\u2605', desc: 'Quiero la formula mas completa' },
    ],
  },
];

function getRecommendation(answers) {
  let scores = products.map(p => ({ product: p, score: 0 }));

  scores.forEach(s => {
    // Aroma match (strongest signal)
    if (s.product.aroma === answers.aroma) s.score += 4;

    // All products have miel, romero, curcuma — base score
    s.score += 1;

    // Concern-based scoring
    if (answers.concern === 'brillo' && s.product.aroma === 'lino-blanco') s.score += 2;
    if (answers.concern === 'hidratacion' && s.product.ingredients.includes('Manteca de karite')) s.score += 3;
    if (answers.concern === 'frizz' && s.product.ingredients.includes('Aceite de coco')) s.score += 3;
    if (answers.concern === 'frescura' && s.product.aroma === 'bosque-andino') s.score += 3;

    // Hair type scoring
    if (answers['hair-type'] === 'normal') s.score += 1;
    if (answers['hair-type'] === 'seco' && s.product.ingredients.includes('Manteca de karite')) s.score += 2;
    if (answers['hair-type'] === 'graso' && s.product.aroma === 'bosque-andino') s.score += 2;
    if (answers['hair-type'] === 'debil') s.score += 1; // all have romero+curcuma

    // Lifestyle — format preference
    if (answers.lifestyle === 'viajero' && s.product.category === 'viaje') s.score += 4;
    if (answers.lifestyle === 'hoteleria' && s.product.category === 'viaje') s.score += 4;
    if (answers.lifestyle === 'familia' && s.product.category === 'normal') s.score += 3;
    if (answers.lifestyle === 'premium' && s.product.category === 'normal') s.score += 3;
  });

  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, 3);
}

export default function QuizFinder() {
  const { addItem } = useCart();
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [animating, setAnimating] = useState(false);

  const progress = results ? 100 : ((currentStep) / steps.length) * 100;

  const handleSelect = (value) => {
    if (animating) return;
    const step = steps[currentStep];
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    setAnimating(true);
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        const recs = getRecommendation(newAnswers);
        setResults(recs);
      }
      setAnimating(false);
    }, 400);
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setResults(null);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
    setStarted(false);
  };

  const formatPrice = (p) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(p);

  if (!started) {
    return (
      <section className="quiz" id="quiz">
        <div className="quiz__container">
          <div className="quiz__intro">
            <span className="section-tag">Encuentra tu ideal</span>
            <h2 className="section-title quiz__intro-title">
              No sabes cual elegir?
            </h2>
            <p className="section-subtitle">
              Responde 4 preguntas y te recomendaremos el shampoo perfecto para tu tipo de cabello
            </p>
            <button className="btn btn--primary quiz__start-btn" onClick={() => setStarted(true)}>
              Iniciar Quiz
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <div className="quiz__intro-features">
              <span>4 preguntas</span>
              <span className="quiz__intro-dot"></span>
              <span>30 segundos</span>
              <span className="quiz__intro-dot"></span>
              <span>Recomendacion personalizada</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz quiz--active" id="quiz">
      <div className="quiz__container">
        <div className="quiz__progress-bar">
          <div className="quiz__progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {!results ? (
          <div className={`quiz__step ${animating ? 'quiz__step--exit' : 'quiz__step--enter'}`}>
            <div className="quiz__step-header">
              <span className="quiz__step-count">
                Paso {currentStep + 1} de {steps.length}
              </span>
              {currentStep > 0 && (
                <button className="quiz__back-btn" onClick={goBack}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="19 12 5 12"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Atras
                </button>
              )}
            </div>

            <h3 className="quiz__question">{steps[currentStep].question}</h3>
            <p className="quiz__question-sub">{steps[currentStep].subtitle}</p>

            <div className="quiz__options">
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt.value}
                  className={`quiz__option ${answers[steps[currentStep].id] === opt.value ? 'quiz__option--selected' : ''}`}
                  onClick={() => handleSelect(opt.value)}
                >
                  <span className="quiz__option-icon">{opt.icon}</span>
                  <div className="quiz__option-text">
                    <strong>{opt.label}</strong>
                    <span>{opt.desc}</span>
                  </div>
                  <div className="quiz__option-check">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz__results quiz__step--enter">
            <h3 className="quiz__results-title">Tu recomendacion personalizada</h3>
            <p className="quiz__results-sub">
              Basado en tus respuestas, estos son los productos ideales para ti
            </p>

            <div className="quiz__results-grid">
              {results.map((r, i) => (
                <div key={r.product.id} className="quiz__result-card" style={{ animationDelay: `${i * 0.15}s` }}>
                  {i === 0 && <span className="quiz__result-best">Mejor opcion</span>}
                  <img src={r.product.image} alt={r.product.name} className="quiz__result-img" />
                  <div className="quiz__result-info">
                    <h4>{r.product.name}</h4>
                    <p>{r.product.description}</p>
                    <div className="quiz__result-match">
                      <div className="quiz__result-match-bar">
                        <div
                          className="quiz__result-match-fill"
                          style={{ width: `${Math.min(100, (r.score / 10) * 100)}%` }}
                        />
                      </div>
                      <span>{Math.min(100, Math.round((r.score / 10) * 100))}% compatible</span>
                    </div>
                    <div className="quiz__result-bottom">
                      <span className="quiz__result-price">{formatPrice(r.product.price)}</span>
                      <button
                        className="btn btn--primary quiz__result-add"
                        onClick={() => addItem(r.product)}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="quiz__restart" onClick={restart}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
              </svg>
              Repetir quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
