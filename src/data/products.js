import shampooHex from '../assets/products/shampoo-hexagonal.jpeg';
import shampooNatural from '../assets/products/shampoo-natural.png';
import shampooNaturaleza from '../assets/products/shampoo-naturaleza.jpeg';
import shampooPlaya from '../assets/products/shampoo-playa.png';
import cajas from '../assets/gallery/cajas.jpg';
import barra from '../assets/gallery/barra.jpg';

const products = [
  {
    id: 1,
    name: 'Lino Blanco — 70g',
    description: 'Frescura elegante que combina con todo. Espuma cremosa, limpieza efectiva y aroma limpio, minimalista y universal. 35-58 lavadas aprox.',
    price: 28000,
    image: shampooHex,
    category: 'normal',
    aroma: 'lino-blanco',
    ingredients: ['Miel de abejas', 'Romero', 'Curcuma', 'Manteca de karite'],
    badge: 'Mas vendido',
    size: '70g',
  },
  {
    id: 2,
    name: 'Flor de Cafe — 70g',
    description: 'Un sello distintivo, fino y unico. Sensacion Colombia sofisticada y memorable, nada dulce. 35-58 lavadas aprox.',
    price: 28000,
    image: shampooNatural,
    category: 'normal',
    aroma: 'flor-cafe',
    ingredients: ['Miel de abejas', 'Romero', 'Curcuma', 'Aceites esenciales'],
    badge: null,
    size: '70g',
  },
  {
    id: 3,
    name: 'Bosque Andino — 70g',
    description: 'Verde, limpio y revitalizante. Sensacion de spa moderno, fresco-verde y naturaleza premium. 35-58 lavadas aprox.',
    price: 28000,
    image: shampooNaturaleza,
    category: 'normal',
    aroma: 'bosque-andino',
    ingredients: ['Miel de abejas', 'Romero', 'Curcuma', 'Aceite de coco'],
    badge: 'Nuevo',
    size: '70g',
  },
  {
    id: 4,
    name: 'Lino Blanco — 20g',
    description: 'Amenidad premium para hoteleria, glamping y viaje. Compacto, practico y con la misma formula optimizada. 10-16 lavadas aprox.',
    price: 12000,
    image: shampooPlaya,
    category: 'viaje',
    aroma: 'lino-blanco',
    ingredients: ['Miel de abejas', 'Romero', 'Curcuma', 'Manteca de karite'],
    badge: 'Compacto',
    size: '20g',
  },
  {
    id: 5,
    name: 'Flor de Cafe — 20g',
    description: 'Formato viaje con el aroma colombiano sofisticado. Ideal para kits de bienvenida y experiencias exclusivas. 10-16 lavadas aprox.',
    price: 12000,
    image: cajas,
    category: 'viaje',
    aroma: 'flor-cafe',
    ingredients: ['Miel de abejas', 'Romero', 'Curcuma', 'Aceites esenciales'],
    badge: null,
    size: '20g',
  },
  {
    id: 6,
    name: 'Bosque Andino — 20g',
    description: 'Amenidad con aroma spa revitalizante. Presentacion ideal para hospitalidad premium y glamping. 10-16 lavadas aprox.',
    price: 12000,
    image: barra,
    category: 'viaje',
    aroma: 'bosque-andino',
    ingredients: ['Miel de abejas', 'Romero', 'Curcuma', 'Aceite de coco'],
    badge: null,
    size: '20g',
  },
];

export const categories = [
  { value: 'todos', label: 'Todos' },
  { value: 'normal', label: 'Uso regular (70g)' },
  { value: 'viaje', label: 'Viaje / Hoteleria (20g)' },
];

export const aromas = [
  { value: 'todos', label: 'Todos' },
  { value: 'lino-blanco', label: 'Lino Blanco' },
  { value: 'flor-cafe', label: 'Flor de Cafe' },
  { value: 'bosque-andino', label: 'Bosque Andino' },
];

export default products;
