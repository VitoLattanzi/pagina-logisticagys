
import { MessageCircle } from 'lucide-react';

export function FloatingContactButton() {
  const handleClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      className="floating-whatsapp-button"
      onClick={handleClick}
      aria-label="Ir al formulario de contacto"
    >
      <MessageCircle size={26} />
    </button>
  );
}
