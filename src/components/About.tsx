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
           En Logística Martínez brindamos un servicio integral de transporte y distribución, gestionando cargas en contenedores y sueltas con eficiencia y seguridad. Retiramos tu mercadería del puerto o del punto que necesites, la almacenamos en nuestro depósito y la distribuimos a destino, ofreciendo soluciones logísticas completas que se adaptan a las necesidades especificas de tu empresa.
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
