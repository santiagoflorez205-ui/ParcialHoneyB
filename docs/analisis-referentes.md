# Analisis de Referentes - Parcial Practico Grupal

## Entregable 1: Analisis de Interfaz y Patron Interactivo

---

## 1. Trello (https://trello.com)

### Framework/Stack detectado
- **Framework:** React (verificado con React DevTools y Wappalyzer)
- **Stack:** React + Redux + Atlassian Design System
- **Render:** Client-Side Rendering (SPA)

### Descripcion de la interfaz
Trello presenta un tablero Kanban con listas verticales que contienen tarjetas. La interfaz utiliza un layout horizontal scrollable donde cada lista es un contenedor independiente.

### Patron interactivo: Drag & Drop
- **Que pasa con el estado:** Al arrastrar una tarjeta, React actualiza el estado local inmediatamente (UI optimista). El orden de las tarjetas se recalcula usando indices de posicion. Redux almacena el nuevo estado del tablero.
- **Que se actualiza:** La tarjeta se mueve visualmente a la nueva posicion. El contador de tarjetas de cada lista se actualiza. El estado del tablero en Redux refleja la nueva organizacion.
- **Que NO se recarga:** La pagina nunca se recarga. Ni las listas adyacentes, ni el header, ni otros tableros se re-renderizan. Solo los componentes afectados se actualizan gracias a la reconciliacion de React.
- **Sincronizacion:** El cambio se envia al servidor de forma asincrona. Si falla, se revierte el estado visual (rollback optimista).

---

## 2. Linear (https://linear.app)

### Framework/Stack detectado
- **Framework:** React (verificado con Wappalyzer)
- **Stack:** React + Next.js + GraphQL + WebSockets
- **Render:** Hybrid (SSR + CSR)

### Descripcion de la interfaz
Linear es un gestor de issues con una interfaz minimalista de alta velocidad. Destaca por su menu de comandos (Cmd+K) y transiciones instantaneas.

### Patron interactivo: UI Optimista
- **Que pasa con el estado:** Al cambiar el estado de un issue (por ejemplo, de "Todo" a "In Progress"), la interfaz refleja el cambio instantaneamente ANTES de recibir confirmacion del servidor. El estado local en React se actualiza primero.
- **Que se actualiza:** El issue cambia de columna/estado visualmente. El contador de cada estado se actualiza. La lista filtrada se reordena. El panel lateral (si esta abierto) refleja el nuevo estado.
- **Que NO se recarga:** Nada se recarga. No hay spinners ni estados de carga visibles. La percepcion de velocidad es inmediata.
- **Sincronizacion multipunto:** Una sola accion actualiza multiples puntos: la vista de lista, la vista de tablero, el sidebar de navegacion, y los contadores en la barra lateral, todos reflejan el cambio simultaneamente.

---

## 3. Stripe (https://stripe.com)

### Framework/Stack detectado
- **Framework:** React + Next.js (verificado con Wappalyzer y codigo fuente)
- **Stack:** React + Next.js + GSAP + Three.js (para animaciones 3D)
- **Render:** SSG/SSR hibrido

### Descripcion de la interfaz
Stripe presenta una pagina de marketing con animaciones avanzadas ligadas al scroll, gradientes dinamicos y visualizaciones interactivas de datos.

### Patron interactivo: Scroll-driven Interactivity
- **Que pasa con el estado:** El scroll position se captura con IntersectionObserver y requestAnimationFrame. El estado local controla que seccion esta activa, que animacion debe ejecutarse, y la opacidad/posicion de elementos.
- **Que se actualiza:** Los elementos se animan en respuesta al scroll: codigo que se escribe solo, graficos que se construyen, y tarjetas que se apilan. El header cambia de estilo al hacer scroll. La navegacion lateral indica la seccion actual.
- **Que NO se recarga:** Todo ocurre en el cliente. Las animaciones son puras CSS transitions + GSAP orchestration. No hay peticiones al servidor durante la navegacion por scroll.

---

## 4. Tienda DTC - Glossier (https://www.glossier.com)

### Framework/Stack detectado
- **Framework:** React + Next.js (verificado con Wappalyzer)
- **Stack:** React + Next.js + Shopify Storefront API + GraphQL
- **Render:** SSR con hidratacion en cliente

### Descripcion de la interfaz
Glossier es una tienda nativa digital de cosmetica con un diseno limpio y minimalista. Destaca su cart drawer lateral que se despliega desde la derecha.

### Patron interactivo: Cart Drawer con Sincronizacion Multipunto
- **Que pasa con el estado:** Al hacer clic en "Add to Bag", el estado del carrito en React se actualiza con el nuevo producto. Se usa un Context/Store global que notifica a todos los consumidores.
- **Que se actualiza simultaneamente (multipunto):**
  1. El **drawer lateral** se abre mostrando el producto agregado
  2. El **contador en el header** (badge numerico) se incrementa
  3. El **subtotal** en el drawer se recalcula en vivo
  4. El **boton de checkout** actualiza el total
  5. Al modificar cantidades (+/-), todos estos puntos se sincronizan en tiempo real
- **Que NO se recarga:** La pagina permanece intacta. El drawer es un componente overlay que se renderiza condicionalmente. No hay navegacion ni recarga de pagina.
- **Este patron es el que implementamos en HoneyB:** Nuestro CartDrawer replica este comportamiento con Context API + useReducer, logrando sincronizacion multipunto entre el drawer, el badge del header y la barra de subtotales.

---

## Conclusion

Los cuatro referentes analizados comparten un principio fundamental: **el estado de la interfaz se gestiona en el cliente a traves del framework (React), eliminando recargas de pagina y proporcionando retroalimentacion instantanea al usuario.** Patrones como UI optimista y sincronizacion multipunto elevan la experiencia de usuario al hacer que la interfaz se sienta viva y responsiva. Nuestro proyecto HoneyB implementa estos principios a traves del carrito drawer con sincronizacion multipunto (Nivel 3).
