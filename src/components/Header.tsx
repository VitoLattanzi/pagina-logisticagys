import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#que-hacemos', label: 'Qué hacemos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contactanos', label: 'Contáctanos' },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <a href='#inicio' className="header__logo">
            <img src="/logo4.png" alt="Logística Martínez" />
          </a>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header__nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="header__mobile-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="header__mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header__mobile-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
