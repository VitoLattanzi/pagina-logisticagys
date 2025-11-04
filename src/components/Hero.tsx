import { Mail, MessageCircle } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)), url(${backgroundImage})`,
  };

  return (
    <section id="inicio" className="hero" style={heroStyle}>
      <div className="hero__content">
        <h1 className="hero__title">Movemos tu carga, movemos tu negocio.</h1>
        <p className="hero__subtitle">
          Soluciones logísticas rápidas, seguras y a medida para tu empresa.
        </p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--primary">
            <Mail size={20} />
            Contactar por Email
          </button>
          <button className="hero__button hero__button--outline">
            <MessageCircle size={20} />
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
