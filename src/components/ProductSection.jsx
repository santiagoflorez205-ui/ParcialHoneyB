import { useState, useMemo, useEffect } from 'react';
import products from '../data/products';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import './ProductSection.css';

const FILTERS_KEY = 'honeybee-filters';

function loadFilters() {
  try {
    const saved = localStorage.getItem(FILTERS_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return {};
}

export default function ProductSection() {
  const savedFilters = loadFilters();
  const [category, setCategory] = useState(savedFilters.category || 'todos');
  const [aroma, setAroma] = useState(savedFilters.aroma || 'todos');
  const [search, setSearch] = useState(savedFilters.search || '');

  /* Persistencia de filtros: sobreviven a la recarga (igual que el carrito) */
  useEffect(() => {
    try {
      localStorage.setItem(FILTERS_KEY, JSON.stringify({ category, aroma, search }));
    } catch { /* ignore */ }
  }, [category, aroma, search]);

  /* Filtro en vivo: se reordena/oculta en tiempo real sin recarga */
  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCategory = category === 'todos' || p.category === category;
      const matchAroma = aroma === 'todos' || p.aroma === aroma;
      const matchSearch = search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.ingredients.some(ing => ing.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchAroma && matchSearch;
    });
  }, [category, aroma, search]);

  return (
    <section className="products-section" id="productos">
      <div className="products-section__container">
        <span className="section-tag">Nuestros Productos</span>
        <h2 className="section-title products-section__title">
          Encuentra tu shampoo ideal
        </h2>
        <p className="section-subtitle">
          Filtra por tipo de cabello o aroma y descubre el cuidado perfecto para ti
        </p>

        <FilterBar
          activeCategory={category}
          activeAroma={aroma}
          searchQuery={search}
          onCategoryChange={setCategory}
          onAromaChange={setAroma}
          onSearchChange={setSearch}
          resultCount={filtered.length}
        />

        {filtered.length > 0 ? (
          <div className="products-grid" key={`${category}-${aroma}-${search}`}>
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="products-section__empty">
            <p>No encontramos productos con esos filtros</p>
            <button
              className="btn btn--ghost"
              onClick={() => { setCategory('todos'); setAroma('todos'); setSearch(''); }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
