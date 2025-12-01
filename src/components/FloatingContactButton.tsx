
import { MessageCircle } from 'lucide-react';

export function FloatingContactButton() {
  const handleClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href="https://wa.me/541131109334"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button"
      aria-label="Ir a mi perfil de GitHub"
    >
      <MessageCircle size={26} />
    </a>
  );
}
