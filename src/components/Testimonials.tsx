import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'Distribuidora del Norte',
      feedback:
        'Logística Martínez transformó nuestra operación. La puntualidad y profesionalismo son excepcionales. Ahora podemos cumplir con nuestros clientes sin preocupaciones.',
    },
    {
      name: 'Carlos Ramírez',
      company: 'Industrias Tech SA',
      feedback:
        'El servicio de almacenamiento es impecable. La tecnología de seguimiento nos da tranquilidad total sobre nuestro inventario. Un socio confiable.',
    },
    {
      name: 'Ana Fernández',
      company: 'Comercial Sur',
      feedback:
        'Llevamos 3 años trabajando juntos y cada envío llega en perfectas condiciones. El equipo de atención resuelve cualquier duda al instante.',
    },
  ];

  return (
    <section id="clientes" className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">Lo que dicen nuestros clientes</h2>
          <p className="testimonials__subtitle">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <Quote className="testimonials__quote-icon" size={40} />
              <p className="testimonials__feedback">"{testimonial.feedback}"</p>
              <div className="testimonials__author-info">
                <p className="testimonials__author">{testimonial.name}</p>
                <p className="testimonials__company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
