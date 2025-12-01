import { Mail, MessageCircle } from "lucide-react";



export function Footer() {
  const socialLinks = [
    {
      icon: Mail, // O el nombre de tu icono
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vitofrancolattanzi@gmail.com&su=Contratacion%20de%20servicio&body=Hola%20Vito,%20estaba%20interesado%20en",
      label: "Email"
    },
    { icon: MessageCircle, href:"https://wa.me/541131109334", label: "watsap" },
      // ... otros
  ];

  return (
    <footer id="contactanos" className="footer">
      <div className="footer__container">
        <div className="footer__main">          
          <a href="#inicio" className="header__logo">
            <img src="/logo4.png" alt="Logística Martínez" />
          </a>

          <div className="footer__social">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"               // Abre en pestaña nueva
                  rel="noopener noreferrer"     // Seguridad
                  aria-label={social.label}
                  className="footer__social-link"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <div className="footer__links">
            <a href="#" className="footer__link">
              Privacy Policy
            </a>
            <a href="#" className="footer__link">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} Logística Martínez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
