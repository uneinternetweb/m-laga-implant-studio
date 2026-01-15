import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          ¡Gracias por contactarnos!
        </h3>
        <p className="text-muted-foreground">
          Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo 
          en las próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="h-12"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Teléfono *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Tu teléfono"
            className="h-12"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="h-12"
        />
      </div>

      <div>
        <label htmlFor="treatment" className="block text-sm font-medium text-foreground mb-2">
          Tratamiento de interés
        </label>
        <select
          id="treatment"
          name="treatment"
          className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground"
        >
          <option value="">Selecciona una opción</option>
          <option value="implante-unitario">Implante dental unitario</option>
          <option value="implantes-multiples">Varios implantes</option>
          <option value="all-on-4">All-on-4 / All-on-6</option>
          <option value="regeneracion">Regeneración ósea</option>
          <option value="consulta">Primera consulta informativa</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Cuéntanos tu caso o cualquier duda que tengas..."
          className="resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 w-4 h-4 rounded border-input"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          He leído y acepto la{' '}
          <a href="#" className="text-primary underline">política de privacidad</a>.
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full cta-gold rounded-full h-14 text-lg"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Solicitar Cita Gratuita
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
