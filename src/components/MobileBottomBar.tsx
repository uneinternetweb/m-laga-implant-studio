import { Phone, MessageCircle } from 'lucide-react';

const MobileBottomBar = () => {
  const whatsappNumber = '+34679490216';
  const message = encodeURIComponent('Hola, me gustaría solicitar información sobre implantes dentales.');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-card border-t border-border safe-area-bottom">
      <div className="grid grid-cols-2 divide-x divide-border">
        <a
          href="tel:+34951178110"
          className="flex items-center justify-center gap-2 py-3 text-primary font-semibold hover:bg-accent transition-colors"
          aria-label="Llamar por teléfono"
        >
          <Phone className="w-5 h-5" />
          <span>Llamar</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-[#25D366] font-semibold hover:bg-accent transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
