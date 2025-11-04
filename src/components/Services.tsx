import { Truck, Warehouse, Shield, Headphones } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Transporte',
      description:
        'Flota moderna y versátil para el traslado seguro de tu mercancía a cualquier destino.',
    },
    {
      icon: Warehouse,
      title: 'Depósito',
      description:
        'Almacenamiento estratégico con control de inventario y gestión logística avanzada.',
    },
    {
      icon: Shield,
      title: 'Seguro',
      description:
        'Protección integral de tu carga con cobertura completa durante todo el proceso.',
    },
    {
      icon: Headphones,
      title: 'Asesorías',
      description:
        'Consultoría especializada para optimizar tu cadena de suministro y reducir costos.',
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">Nuestros Servicios</h2>
          <p className="services__subtitle">
            Soluciones logísticas completas para cada etapa de tu cadena de suministro
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="services__card">
                <div className="services__icon">
                  <Icon size={28} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
