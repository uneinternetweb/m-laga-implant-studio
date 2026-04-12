import { Phone, MapPin, ArrowRight, Navigation, Mail, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const Contacto = () => {
  const clinics = [
    {
      name: 'Clínica Ayala',
      address: 'Calle Ayala, 80',
      zip: '29002 Málaga',
      mapsUrl: 'https://maps.app.goo.gl/8BCNqbJZ8gSE3FSEA',
      directionsUrl: 'https://www.google.com/maps/dir//Calle+Ayala,+80,+29002+M%C3%A1laga',
      image: 'https://maps.googleapis.com/maps/api/staticmap?center=Calle+Ayala+80+Malaga&zoom=16&size=600x300&maptype=roadmap',
    },
    {
      name: 'Clínica Martínez Maldonado',
      address: 'C/ Martínez Maldonado, 65',
      zip: '29007 Málaga',
      mapsUrl: 'https://maps.app.goo.gl/uCqWqoewm4MH5jrA9',
      directionsUrl: 'https://www.google.com/maps/dir//C/+Mart%C3%ADnez+Maldonado,+65,+29007+M%C3%A1laga',
      image: 'https://maps.googleapis.com/maps/api/staticmap?center=Martinez+Maldonado+65+Malaga&zoom=16&size=600x300&maptype=roadmap',
    },
    {
      name: 'Clínica Velázquez',
      address: 'Avda. de Velázquez, 73',
      zip: '29004 Málaga',
      mapsUrl: 'https://maps.app.goo.gl/Pv5b9hQgAKEfyCD77',
      directionsUrl: 'https://www.google.com/maps/dir//Avda.+de+Vel%C3%A1zquez,+73,+29004+M%C3%A1laga',
      image: 'https://maps.googleapis.com/maps/api/staticmap?center=Avenida+Velazquez+73+Malaga&zoom=16&size=600x300&maptype=roadmap',
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Contacto | Clínicas Dentales Bocaboca en Málaga | Cómo Llegar"
        description="Encuentra nuestras 3 clínicas dentales en Málaga: Ayala, Martínez Maldonado y Velázquez. Horarios, direcciones y cómo llegar. Primera consulta gratuita."
        canonical="/contacto"
      />
      <section className="hero-section py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contacto
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Visítanos en Nuestras Clínicas en Málaga
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Disponemos de tres clínicas en Málaga para estar siempre cerca de ti. 
              Primera consulta gratuita y sin compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Clinics Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestras Sedes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              3 Clínicas en Málaga
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Encuentra la clínica más cercana a ti y pide tu cita. Todas nuestras sedes cuentan con la última tecnología en implantología dental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clinics.map((clinic) => (
              <article key={clinic.name} className="bg-card rounded-3xl overflow-hidden card-hover flex flex-col">
                {/* Map placeholder */}
                <div className="bg-muted h-48 flex items-center justify-center relative">
                  <MapPin className="w-12 h-12 text-primary/30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/10" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {clinic.name}
                  </h3>
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <p>{clinic.address}</p>
                      <p>{clinic.zip}</p>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <a
                      href={clinic.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="default" className="w-full rounded-full gap-2">
                        <MapPin className="w-4 h-4" />
                        Ver en Google Maps
                      </Button>
                    </a>
                    <a
                      href={clinic.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full rounded-full gap-2">
                        <Navigation className="w-4 h-4" />
                        Cómo Llegar
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">Teléfono</h3>
              <a
                href="tel:+34951178110"
                className="text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity"
              >
                951 178 110
              </a>
              <p className="text-sm text-muted-foreground mt-1">Llamada gratuita</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">Email</h3>
              <a
                href="mailto:info@clinicadentalbocaboca.com"
                className="text-primary hover:opacity-80 transition-opacity break-all"
              >
                info@clinicadentalbocaboca.com
              </a>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">Horario</h3>
              <p className="text-muted-foreground">Lunes - Viernes: 09:00 - 21:00</p>
              <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
            </div>
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
