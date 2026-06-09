import { categories, aromas } from '../data/products';
import './FilterBar.css';

export default function FilterBar({ activeCategory, activeAroma, searchQuery, onCategoryChange, onAromaChange, onSearchChange, resultCount }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="filter-bar__input"
        />
        {searchQuery && (
          <button className="filter-bar__clear" onClick={() => onSearchChange('')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      <div className="filter-bar__filters">
        <div className="filter-bar__group">
          <label className="filter-bar__label">Tipo de cabello</label>
          <div className="filter-bar__pills">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-pill ${activeCategory === cat.value ? 'filter-pill--active' : ''}`}
                onClick={() => onCategoryChange(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-bar__group">
          <label className="filter-bar__label">Aroma</label>
          <div className="filter-bar__pills">
            {aromas.map(ar => (
              <button
                key={ar.value}
                className={`filter-pill ${activeAroma === ar.value ? 'filter-pill--active' : ''}`}
                onClick={() => onAromaChange(ar.value)}
              >
                {ar.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filter-bar__count">
        {resultCount} {resultCount === 1 ? 'producto encontrado' : 'productos encontrados'}
      </p>
    </div>
  );
}
