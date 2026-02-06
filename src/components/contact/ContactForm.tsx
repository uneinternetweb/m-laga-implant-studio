import { useState, useEffect } from 'react';
import { Send, CheckCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // CAPTCHA state
  const [captchaNumbers, setCaptchaNumbers] = useState({ a: 0, b: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  // Generate random numbers for CAPTCHA
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaNumbers({ a, b });
    setCaptchaAnswer('');
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    const correctAnswer = captchaNumbers.a + captchaNumbers.b;
    if (parseInt(captchaAnswer) !== correctAnswer) {
      setCaptchaError(true);
      toast.error('La respuesta del captcha es incorrecta. Inténtalo de nuevo.');
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      treatment: formData.get('treatment') as string,
      message: formData.get('message') as string,
    };

    try {
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) {
        console.error('Error sending email:', error);
        throw new Error(error.message || 'Error al enviar el formulario');
      }

      setIsSubmitted(true);
      toast.success('¡Gracias! Tu solicitud ha sido enviada correctamente.');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
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
            maxLength={100}
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
            maxLength={20}
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
          maxLength={255}
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
          <option value="protesis-dentales">Prótesis dentales</option>
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
          maxLength={1000}
        />
      </div>

      {/* Math CAPTCHA */}
      <div className="bg-muted rounded-lg p-4">
        <label className="block text-sm font-medium text-foreground mb-3">
          Verificación de seguridad *
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-lg font-medium text-foreground">
            <span>{captchaNumbers.a}</span>
            <span>+</span>
            <span>{captchaNumbers.b}</span>
            <span>=</span>
          </div>
          <Input
            type="number"
            value={captchaAnswer}
            onChange={(e) => {
              setCaptchaAnswer(e.target.value);
              setCaptchaError(false);
            }}
            placeholder="?"
            className={`w-20 h-10 text-center ${captchaError ? 'border-red-500' : ''}`}
            required
          />
          <button
            type="button"
            onClick={generateCaptcha}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Generar nuevo captcha"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        {captchaError && (
          <p className="text-destructive text-sm mt-2">Respuesta incorrecta. Inténtalo de nuevo.</p>
        )}
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
          <Link to="/privacidad" target="_blank" rel="noopener noreferrer" className="text-primary underline">política de privacidad</Link>.
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
