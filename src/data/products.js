import shampooHex from '../assets/products/shampoo-hexagonal.jpeg';
import shampooNatural from '../assets/products/shampoo-natural.png';
import shampooNaturaleza from '../assets/products/shampoo-naturaleza.jpeg';
import shampooPlaya from '../assets/products/shampoo-playa.png';
import lifestyle1 from '../assets/gallery/lifestyle1.jpg';
import lifestyle2 from '../assets/gallery/lifestyle2.jpg';

const products = [
  {
    id: 1,
    name: 'Shampoo Sólido Original',
    description: 'Nuestra fórmula insignia con miel pura, cúrcuma y romero. Limpieza profunda y brillo natural para tu cabello.',
    price: 28000,
    image: shampooHex,
    category: 'normal',
    aroma: 'miel',
    ingredients: ['Miel', 'Cúrcuma', 'Romero', 'Extractos vegetales'],
    badge: 'Más vendido',
  },
  {
    id: 2,
    name: 'Shampoo Sólido Romero',
    description: 'Formulado especialmente para cabello graso. El romero regula la producción de sebo y aporta frescura duradera.',
    price: 28000,
    image: shampooNatural,
    category: 'graso',
    aroma: 'romero',
    ingredients: ['Romero', 'Árbol de té', 'Arcilla verde', 'Menta'],
    badge: null,
  },
  {
    id: 3,
    name: 'Shampoo Sólido Nutrición',
    description: 'Hidratación intensa para cabello seco y maltratado. La manteca de karité y la miel devuelven la vida a tu cabello.',
    price: 32000,
    image: shampooNaturaleza,
    category: 'seco',
    aroma: 'vainilla',
    ingredients: ['Miel', 'Manteca de karité', 'Aceite de argán', 'Vainilla'],
    badge: 'Nuevo',
  },
  {
    id: 4,
    name: 'Shampoo Sólido Fortaleza',
    description: 'Fortalece el cabello debilitado desde la raíz. La biotina y la cúrcuma estimulan el crecimiento saludable.',
    price: 35000,
    image: lifestyle1,
    category: 'debil',
    aroma: 'cítrico',
    ingredients: ['Cúrcuma', 'Biotina', 'Aceite de ricino', 'Naranja'],
    badge: null,
  },
  {
    id: 5,
    name: 'Shampoo Sólido Viajero',
    description: 'Tamaño compacto perfecto para llevar a todas partes. Sin líquidos, sin derrames, sin plástico.',
    price: 18000,
    image: shampooPlaya,
    category: 'normal',
    aroma: 'coco',
    ingredients: ['Miel', 'Aceite de coco', 'Aloe vera', 'Romero'],
    badge: 'Compacto',
  },
  {
    id: 6,
    name: 'Pack Familiar x3',
    description: 'Tres shampoos sólidos originales al mejor precio. Ideal para toda la familia. ¡Ahorra y cuida el planeta!',
    price: 72000,
    image: lifestyle2,
    category: 'normal',
    aroma: 'miel',
    ingredients: ['Miel', 'Cúrcuma', 'Romero', 'Extractos vegetales'],
    badge: 'Ahorra 15%',
  },
];

export const categories = [
  { value: 'todos', label: 'Todos' },
  { value: 'normal', label: 'Cabello Normal' },
  { value: 'graso', label: 'Cabello Graso' },
  { value: 'seco', label: 'Cabello Seco' },
  { value: 'debil', label: 'Cabello Débil' },
];

export const aromas = [
  { value: 'todos', label: 'Todos' },
  { value: 'miel', label: 'Miel' },
  { value: 'romero', label: 'Romero' },
  { value: 'vainilla', label: 'Vainilla' },
  { value: 'cítrico', label: 'Cítrico' },
  { value: 'coco', label: 'Coco' },
];

export default products;
