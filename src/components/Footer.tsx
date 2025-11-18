import { Mail, MessageCircle  } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: '#', label: 'mail' },
    { icon: MessageCircle, href: '#', label: 'watsap' },
  ];

  return (
    <footer id="contactanos" className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="header__logo">
            <img src="/logo3.png" alt="Logística Martínez" />
          </div>

          <div className="footer__social">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
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
