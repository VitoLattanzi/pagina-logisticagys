import { Zap, Clock, DollarSign } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Rapidez',
      description: 'Entregas ágiles y puntuales que optimizan tus tiempos de operación.',
    },
    {
      icon: Clock,
      title: 'Soporte 24/7',
      description: 'Atención continua para resolver tus necesidades en cualquier momento.',
    },
    {
      icon: DollarSign,
      title: 'Optimización de costos',
      description: 'Soluciones eficientes que maximizan tu inversión logística.',
    },
  ];

  return (
    <section id="que-hacemos" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">Qué hacemos</h2>
          <p className="about__description">
            En Logística Martínez transformamos la gestión de tu cadena de suministro con
            soluciones integrales diseñadas para impulsar el crecimiento de tu empresa.
            Combinamos tecnología avanzada, experiencia y compromiso para ofrecerte un
            servicio de excelencia que se adapta a tus necesidades específicas.
          </p>
        </div>

        <div className="about__features">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="about__feature-card">
                <div className="about__feature-icon">
                  <Icon size={32} />
                </div>
                <h3 className="about__feature-title">{feature.title}</h3>
                <p className="about__feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
