import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero backgroundImage="/hero-bg.jpg" />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
