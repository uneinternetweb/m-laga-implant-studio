import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';

const Contacto = () => {
  const clinics = [
    {
      name: 'Clínica Ayala',
      address: 'Calle Ayala, 80',
      zip: '29002 Málaga',
      mapsUrl: 'https://maps.app.goo.gl/8BCNqbJZ8gSE3FSEA',
    },
    {
      name: 'Clínica Martínez Maldonado',
      address: 'C/ Martínez Maldonado, 65',
      zip: '29007 Málaga',
      mapsUrl: 'https://maps.app.goo.gl/uCqWqoewm4MH5jrA9',
    },
    {
      name: 'Clínica Velázquez',
      address: 'Avda. de Velázquez, 73',
      zip: '29004 Málaga',
      mapsUrl: 'https://maps.app.goo.gl/Pv5b9hQgAKEfyCD77',
    },
  ];

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
              {/* Clinics Card */}
              <div className="bg-card rounded-2xl p-8 card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xl">Nuestras Clínicas</h3>
                </div>
                <div className="space-y-6">
                  {clinics.map((clinic) => (
                    <div key={clinic.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-1">{clinic.name}</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {clinic.address}<br />
                        {clinic.zip}
                      </p>
                      <a 
                        href={clinic.mapsUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                      >
                        Ver en Google Maps
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
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
                      href="tel:+34951178110" 
                      className="text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity"
                    >
                      951 178 110
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
                      href="mailto:info@clinicadentalbocaboca.com" 
                      className="text-primary hover:opacity-80 transition-opacity"
                    >
                      info@clinicadentalbocaboca.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
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
