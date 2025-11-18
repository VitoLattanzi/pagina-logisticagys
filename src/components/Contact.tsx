import React, { useState } from 'react'; 

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
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
            // Estos son tus datos
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            // Opciones extra de FormSubmit (opcionales)
            _template: "basic", // Para que el mail se vea prolijo
            _subject: `Nuevo contacto: ${form.subject}`, // Asunto del mail que te llega
            _captcha: "false", // Para desactivar el captcha   
            })
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Hubo un problema al enviar. Intentá de nuevo.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión.');
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
            {/* ... (resto de tu info estática igual que antes) ... */}
            <div className="contact__info-list">
               {/* ... items ... */}
               <div className="contact__info-item">
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">contacto@logisticamartinez.com</span>
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
              {/* CAMPOS OCULTOS TRUCOSOS (Honeypot) para evitar spam */}
              <input type="text" name="_honey" style={{display: 'none'}} />
              
              {/* ... Tus inputs siguen IGUAL que antes ... */}
              
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
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Asunto..."
                  required
                />
              </label>

              <label className="contact__field">
                <span className="contact__label">Mensaje</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Mensaje..."
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