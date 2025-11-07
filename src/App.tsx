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
      <Hero
        images={[
          '/public/slide-1.jpg',
          '/public/slide-1.jpg',
          '/public/slide-1.jpg',
          '/public/slide-1.jpg'
        ]}
        intervalMs={6000}
        title="LOGISTICA MARTINEZ"
        subtitle="Movemos tu carga, movemos tu negocio."
      />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
