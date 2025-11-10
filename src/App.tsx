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
          '/slide-1.png',
          '/slide-2.png',
          '/slide-3.png',     
          '/slide-4.png',
          '/slide-5.png',            
        ]}
        intervalMs={1000}
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
