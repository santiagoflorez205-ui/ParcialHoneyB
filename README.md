# Honey'B - Shampoo Solido Natural

Aplicacion web e-commerce para **Honey'B Natural Cosmetics**, marca colombiana de shampoo solido artesanal elaborado con miel, curcuma y romero.

## Integrantes
- Santiago Florez

## Stack Tecnologico
- **Framework:** React 19 (Vite)
- **Estado global:** Context API + useReducer
- **Estilos:** CSS modular por componente
- **Fuentes:** Playfair Display + Lora (Google Fonts)

## Componentes Interactivos Implementados

### Nivel 1 - Filtro en vivo
Sistema de busqueda y filtrado que reordena los productos en tiempo real segun tipo de cabello, aroma y texto de busqueda. Utiliza `useMemo` para filtrado eficiente sin recarga de pagina.

### Nivel 1 - Carrito de compras dinamico (Cart Drawer)
Panel lateral (drawer) que permite agregar productos, actualizar cantidades con botones +/-, ver subtotal por item y total general en vivo.

### Nivel 3 - Sincronizacion multipunto
Una sola accion del usuario (agregar/modificar carrito) actualiza simultaneamente:
1. **Panel drawer** - items, cantidades y subtotales
2. **Badge del header** - contador numerico de productos
3. **Barra de subtotales** - monto total en el header

Todo sin recargar la pagina, usando Context API con useReducer como unica fuente de verdad.

## Estructura del Proyecto

```
src/
  context/
    CartContext.jsx        # Estado global del carrito (useReducer)
  data/
    products.js            # Catalogo de productos HoneyB
  components/
    Header.jsx/css         # Navegacion + badge + subtotal
    Hero.jsx/css           # Seccion hero con animaciones
    FilterBar.jsx/css      # Filtro en vivo (busqueda + pills)
    ProductCard.jsx/css    # Tarjeta de producto
    ProductSection.jsx/css # Grid de productos + filtrado
    CartDrawer.jsx/css     # Drawer lateral del carrito
    Benefits.jsx/css       # Beneficios con scroll animation
    About.jsx/css          # Historia de la marca
    Footer.jsx/css         # Pie de pagina
  assets/
    brand/                 # Logos de Honey'B
    products/              # Fotos de productos
    gallery/               # Fotos lifestyle
docs/
  analisis-referentes.md   # Entregable 1: Analisis de 4 referentes
```

## Instalacion y Ejecucion

```bash
npm install
npm run dev
```

## Analisis de Referentes
Ver el documento completo en [`docs/analisis-referentes.md`](docs/analisis-referentes.md).

Sitios analizados: Trello, Linear, Stripe, Glossier.

## Negocio
**Honey'B** - Shampoo solido artesanal colombiano. 3 anos en el mercado ofreciendo cosmetica natural sin plasticos, sin sulfatos, sin parabenos.
