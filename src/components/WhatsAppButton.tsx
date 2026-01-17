import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '+34679490216';
  const message = encodeURIComponent('Hola, me gustaría solicitar información sobre implantes dentales.');
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="font-semibold hidden sm:inline group-hover:inline">
        ¿Hablamos?
      </span>
    </a>
  );
};

export default WhatsAppButton;
