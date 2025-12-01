import React, { useState } from 'react'; 

interface ContactFormState {
  name: string;
  email: string;
  asunto: string;
  mensaje: string;
  honey: string; // Campo trampa para bots
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    asunto: '',
    mensaje: '',
    honey: '', // Inicialmente vacío
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
    // Si el campo oculto "honey" tiene algo escrito, es un bot.
    // Retornamos fake success y NO enviamos nada al servidor.
    if (form.honey) {
      console.log("Bot detectado y bloqueado."); 
      setForm({ name: '', email: '', asunto: '', mensaje: '', honey: '' });
      return; 
    }
    // --------------------------------------

    setLoading(true);

    // REEMPLAZÁ ESTE MAIL POR EL TUYO REAL
    const tuMail = "vitofrancolattanzi@gmail.com"; 
    
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
            // Opciones de configuración
            _template: "table", // "table" suele verse mejor que "basic"
            _asunto: `Nuevo contacto web: ${form.asunto}`,
            // Nota: Al usar AJAX, no podemos mostrar el Captcha visual de Google.
            // Confiamos en el Honeypot de arriba y los filtros internos de FormSubmit.
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
          
          {/* Columna izquierda (Texto) */}
          <div className="contact__info">
            <h2 className="contact__title">Datos de contacto</h2>
              <p className="contact__subtitle">
                Coordiná tus envíos y consultá por soluciones logísticas a medida.
              </p>
                         
            <div className="contact__info-list">
               {/* Ejemplo de item con icono */}
              <div className="contact__info-item">
                <span className="contact__title">Email</span>
                <span className="contact__subtitle">contacto@logisticamartinez.com</span>
              </div>
              {/* Agrega aquí teléfono o dirección si los tienes */}
            </div>
          
            <h2 className="contact__title">Ubicacion</h2>
              <p className="contact__subtitle">
                Nos encuentras en Florentino Ameghino 350/360, Avellaneda, Provincia de Buenos Aires
              </p>
          </div>
          {/* Columna derecha (Formulario) */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Formulario de contacto</h3>
            <p className="contact__form-subtitle">
              Dejanos tu mensaje y a la brevedad nos comunicamos.
            </p>

            <form className="contact__form" onSubmit={handleSubmit}>
              
              {/* --- INPUT TRAMPA (HONEYPOT) --- */}
              {/* Visible para bots, invisible para humanos. Si se llena, bloqueamos el envío */}
              <input 
                type="text" 
                name="honey" 
                value={form.honey}
                onChange={handleChange}
                style={{ display: 'none' }} 
                tabIndex={-1} 
                autoComplete="off"
              />
              {/* ------------------------------- */}
              
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