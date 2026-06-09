import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import QuizFinder from './components/QuizFinder';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductSection />
        <QuizFinder />
        <Process />
        <Gallery />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

export default App;
