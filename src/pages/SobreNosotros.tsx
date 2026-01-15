import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, Heart, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';

const SobreNosotros = () => {
  const team = [
    {
      name: 'Dr. Carlos Martínez García',
      role: 'Director Médico - Implantólogo',
      image: doctor1,
      bio: 'Licenciado en Odontología por la Universidad de Barcelona. Máster en Implantología Oral Avanzada por NYU. Más de 20 años de experiencia y más de 5.000 implantes colocados con éxito.',
      specialties: ['Implantología', 'Cirugía Oral', 'All-on-4'],
    },
    {
      name: 'Dra. María García López',
      role: 'Especialista en Periodoncia',
      image: doctor2,
      bio: 'Doctora por la Universidad de Málaga. Especialista en periodoncia e implantología. Experta en tratamiento de encías y mantenimiento de implantes dentales.',
      specialties: ['Periodoncia', 'Implantes', 'Regeneración ósea'],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Trato Humano',
      description: 'Cada paciente es único. Escuchamos tus necesidades y miedos para ofrecerte la mejor experiencia.',
    },
    {
      icon: Award,
      title: 'Excelencia Clínica',
      description: 'Utilizamos la tecnología más avanzada y seguimos los protocolos más rigurosos del sector.',
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Profesionales titulados con formación continua en las mejores universidades internacionales.',
    },
    {
      icon: GraduationCap,
      title: 'Formación Continua',
      description: 'Nos mantenemos al día con las últimas técnicas y avances en implantología dental.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Sobre Nosotros
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Tu Clínica de Confianza en Málaga
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Más de 15 años dedicados a la salud bucodental de Málaga y la Costa del Sol. 
              Un equipo de especialistas comprometidos con tu sonrisa.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Nuestra Historia
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Desde 2009 Cuidando Sonrisas en Málaga
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nuestra clínica nació con una visión clara: ofrecer tratamientos de implantología 
                de la máxima calidad con un trato cercano y humano. Lo que comenzó como un pequeño 
                gabinete dental se ha convertido en una clínica de referencia en Málaga.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hoy contamos con instalaciones de última generación, tecnología 3D y un equipo 
                multidisciplinar que ha devuelto la sonrisa a miles de pacientes de Málaga, 
                la Costa del Sol y más allá.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '+15', label: 'Años' },
                  { number: '+5.000', label: 'Implantes' },
                  { number: '98%', label: 'Éxito' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden card-hover">
              <img
                src={clinicInterior}
                alt="Interior de nuestra clínica dental en Málaga"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestros Valores
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Lo Que Nos Define
            </h2>
            <p className="text-muted-foreground text-lg">
              Nuestra filosofía se basa en cuatro pilares fundamentales que guían 
              cada tratamiento y cada interacción con nuestros pacientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestro Equipo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Profesionales a tu Servicio
            </h2>
            <p className="text-muted-foreground text-lg">
              Conoce a los especialistas que harán posible tu nueva sonrisa. 
              Formación de élite, experiencia contrastada y dedicación absoluta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card rounded-3xl overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Tecnología
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Equipamiento de Última Generación
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'TAC 3D Dental',
                description: 'Diagnóstico tridimensional para planificar los implantes con máxima precisión milimétrica.',
              },
              {
                title: 'Cirugía Guiada',
                description: 'Software de planificación digital que permite realizar la cirugía de forma predecible y segura.',
              },
              {
                title: 'Escáner Intraoral',
                description: 'Impresiones digitales sin moldes incómodos. Más precisión y comodidad para el paciente.',
              },
            ].map((tech, index) => (
              <div 
                key={tech.title}
                className="bg-card rounded-2xl p-8 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ven a Conocernos
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Visita nuestras instalaciones en Málaga Centro y conoce a nuestro equipo. 
            Primera consulta gratuita y sin compromiso.
          </p>
          <Button asChild size="lg" className="cta-gold rounded-full px-8 h-14 text-lg">
            <Link to="/contacto">
              Solicitar Visita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNosotros;
