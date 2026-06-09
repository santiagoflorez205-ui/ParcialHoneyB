import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Benefits from './components/Benefits';
import About from './components/About';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <Benefits />
        <About />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

export default App;
