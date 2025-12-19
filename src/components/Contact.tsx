import React, { useState } from 'react'; 
import "../styles/globals.css";
interface ContactFormState {
  name: string;
  email: string;
  asunto: string;
  mensaje: string;
  honey: string; 
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    asunto: '',
    mensaje: '',
    honey: '', 
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // --- SEGURIDAD ANTI-BOTS (Honeypot) ---
    if (form.honey) {
      console.log("Bot detectado y bloqueado."); 
      setForm({ name: '', email: '', asunto: '', mensaje: '', honey: '' });
      return; 
    }

    setLoading(true);

    // REEMPLAZÁ ESTE MAIL POR EL TUYO REAL
    const tuMail = "info@logisticamartinez.com.ar"; 
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${tuMail}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            asunto: form.asunto,
            message: form.mensaje,
            _template: "table",
            _asunto: `Nuevo contacto web: ${form.asunto}`,
        })
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setForm({ name: '', email: '', asunto: '', mensaje: '', honey: '' });
      } else {
        alert('Hubo un problema al enviar. Por favor, intentá nuevamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión. Verificá tu internet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__grid">
          
          {/* Columna izquierda (Texto e Información) */}
          <div className="contact__info">
            <h2 className="contact__title">Datos de contacto</h2>
            <p className="contact__subtitle">
              Coordiná tus envíos y consultá por soluciones logísticas a medida.
            </p>
                         
            <div className="contact__info-list">
              <div className="contact__info-item">
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">info@logisticamartinez.com.ar</span>
              </div>
            </div>
          
            <h2 className="contact__title" style={{ marginTop: '1.5rem' }}>Ubicación</h2>
            <p className="contact__subtitle">
              Nos encontrás en Florentino Ameghino 350/360, Avellaneda, Provincia de Buenos Aires.
            </p>

            {/* --- SECCIÓN MAPA RESPONSIVE --- */}
            <div className="contact__map-wrapper">
              
              {/* OPCIÓN 1: Botón para Celulares (Link directo a la app) */}
              {/* Poné acá el link que te da Google Maps al poner "Compartir" */}
              <a 
                href="https://maps.app.goo.gl/PsWcQeRrfKyeVnvx8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact__map-mobile-link"
              >
                📍 Abrir ubicación en GPS
              </a>

              {/* OPCIÓN 2: Mapa interactivo para PC (Iframe) */}
              <div className="contact__map-desktop-frame">
                <iframe 
                  title="Ubicación Logística Martínez" 
                  /* Poné acá el src del iframe que te da Google Maps */
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.9302515646386!2d-58.368821725063384!3d-34.656464360284424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335421be4b1d%3A0xa5d2050f0ae22eb2!2sFlorentino%20Ameghino%20350%2C%20B1870CVG%20Avellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1764868086731!5m2!1ses!2sar" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>

          {/* Columna derecha (Formulario) */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Formulario de contacto</h3>
            <p className="contact__form-subtitle">
              Dejanos tu mensaje y a la brevedad nos comunicamos.
            </p>

            <form className="contact__form" onSubmit={handleSubmit}>
              
              {/* --- INPUT TRAMPA (HONEYPOT) --- */}
              <input 
                type="text" 
                name="honey" 
                value={form.honey}
                onChange={handleChange}
                style={{ display: 'none' }} 
                tabIndex={-1} 
                autoComplete="off"
              />
              
              <label className="contact__field">
                <span className="contact__label">Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Tu nombre completo"
                  required
                />
              </label>

              <label className="contact__field">
                <span className="contact__label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="tucorreo@empresa.com"
                  required
                />
              </label>

              <label className="contact__field">
                <span className="contact__label">Asunto</span>
                <input
                  type="text"
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Asunto..."
                  required
                />
              </label>

              <label className="contact__field">
                <span className="contact__label">Mensaje</span>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Escribí tu mensaje aquí..."
                  rows={5}
                  required
                />
              </label>

              <button 
                type="submit" 
                className="contact__button"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}