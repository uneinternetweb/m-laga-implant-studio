import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';

const Contacto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contacto
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Pide Tu Cita en Málaga
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Primera consulta gratuita. Estudiaremos tu caso y te ofreceremos un 
              diagnóstico personalizado sin ningún compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-12 card-hover">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Solicita Tu Primera Consulta Gratuita
                </h2>
                <p className="text-muted-foreground mb-8">
                  Rellena el formulario y te contactaremos en menos de 24 horas.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address Card */}
              <div className="bg-card rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Calle Principal, 123<br />
                      29001 Málaga, España
                    </p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Ver en Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-card rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <a 
                      href="tel:+34952000000" 
                      className="text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity"
                    >
                      952 000 000
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Llamada gratuita
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-card rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:info@implantesmalaga.com" 
                      className="text-primary hover:opacity-80 transition-opacity"
                    >
                      info@implantesmalaga.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-card rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Horario</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes</span>
                        <span className="font-medium text-foreground">09:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados</span>
                        <span className="font-medium text-foreground">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos</span>
                        <span className="text-muted-foreground">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted">
        <div className="h-96 bg-accent flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Mapa interactivo - Calle Principal, 123 - Málaga Centro
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Preguntas Frecuentes
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-3">
              Antes de tu Visita
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '¿La primera consulta es realmente gratuita?',
                a: 'Sí, la primera consulta de valoración es completamente gratuita y sin compromiso. Incluye revisión, diagnóstico inicial y presupuesto detallado.',
              },
              {
                q: '¿Cuánto tiempo debo esperar para una cita?',
                a: 'Normalmente podemos atenderte en menos de una semana. Para urgencias, disponemos de horarios especiales.',
              },
              {
                q: '¿Hay parking cerca de la clínica?',
                a: 'Disponemos de aparcamiento gratuito para pacientes en el edificio. También hay parkings públicos a menos de 5 minutos.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
