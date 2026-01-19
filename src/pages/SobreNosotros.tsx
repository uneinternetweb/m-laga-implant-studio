import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, Heart, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import doctorAlfonso from '@/assets/doctor-alfonso.jpg';
import clinicaGabinete from '@/assets/clinica-gabinete.png';
import clinicaRecepcion from '@/assets/clinica-recepcion.png';

const SobreNosotros = () => {
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

  const drMorenoCredentials = [
    'Licenciado en Odontología en 1997 por la Universidad de Granada',
    'Máster Propio Universitario en Cirugía Oral, Implantología y Periodoncia por la Universidad de Málaga',
    'Colaborador en el Máster Propio Universitario en Cirugía Oral, Implantología y Periodoncia de la Universidad de Málaga',
    'Miembro de la Sociedad Española de Cirugía Bucal (SECIB)',
    'Miembro de la Sociedad Española de Periodoncia y Osteointegración (SEPA)',
    'Miembro de la Sociedad Española de Implantes (SEI)',
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
              Más de 20 años dedicados a la salud bucodental de Málaga y la Costa del Sol. 
              3 clínicas con un equipo de más de 10 especialistas comprometidos con tu sonrisa.
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
                Clínicas Dentales Bocaboca
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Bocaboca nació con una visión clara: ofrecer tratamientos de implantología 
                de la máxima calidad con un trato cercano y humano. Lo que comenzó como una 
                clínica dental se ha convertido en un referente en Málaga con 3 centros.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hoy contamos con instalaciones de última generación, tecnología 3D y un equipo 
                multidisciplinar que ha devuelto la sonrisa a más de 13.000 pacientes de Málaga, 
                la Costa del Sol y más allá.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '+20', label: 'Años' },
                  { number: '13.000+', label: 'Pacientes' },
                  { number: '3', label: 'Clínicas' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-secondary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden card-hover">
              <img
                src={clinicaRecepcion}
                alt="Recepción de Clínicas Dentales Bocaboca en Málaga"
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
                  <value.icon className="w-8 h-8 text-secondary" />
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

      {/* Dr. Alfonso Moreno */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Dirección Área Médica
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Dr. Alfonso Moreno Sánchez
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden card-hover">
              <img
                src={doctorAlfonso}
                alt="Dr. Alfonso Moreno Sánchez - Director Médico de Clínicas Bocaboca"
                className="w-full h-auto aspect-[4/5] object-cover object-top"
              />
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                El doctor Alfonso Moreno es el director médico de las Clínicas Bocaboca. 
                Gracias a su esfuerzo y dedicación en el campo de la odontología y la cirugía oral, 
                ha conseguido ser miembro de la Sociedad Española de Cirugía Bucal (SECIB), 
                de la Sociedad Española de Periodoncia (SEPA) y de la Sociedad Española de Implantes (SEI).
              </p>
              
              <div className="bg-accent rounded-2xl p-6 mb-6">
                <p className="font-display text-xl font-bold text-foreground mb-2">
                  Más de veinte años
                </p>
                <p className="text-secondary font-medium">de experiencia en el sector</p>
              </div>

              <ul className="space-y-3">
                {drMorenoCredentials.map((credential, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestro Equipo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Profesionales Especializados en Todas las Áreas
            </h2>
            <p className="text-muted-foreground text-lg">
              En Clínicas Dentales Bocaboca, contamos con un equipo de especialistas en todos 
              los campos de la odontología, porque para nosotros, la salud bucodental no es un 
              privilegio, sino un derecho al que toda la población tiene que tener acceso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                El equipo de clínicas dentales Bocaboca está constituido por profesionales con 
                amplia experiencia, a través de la cual hemos podido adaptarnos a las innovaciones 
                del sector, invirtiendo en I+D, formación continuada y siendo pioneros en muchos 
                tratamientos vanguardistas y de última generación.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Todos nuestros profesionales realizan los tratamientos adaptándose a las necesidades 
                de cada uno de nuestros pacientes, estudiando su caso de forma individualizada y 
                consensuando, mediante sesiones clínicas, con los más de 10 doctores/as que forman 
                parte de nuestras clínicas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Una de las premisas que destacan en nuestras clínicas es la creencia en las 
                especialidades dentro de la odontología. La boca puede tener diferentes problemas 
                o patologías, y no todos deben tratarse por igual.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Implantología', 'Periodoncia', 'Ortodoncia', 'Estética Dental', 'Cirugía Maxilofacial', 'Odontopediatría', 'Odontología General'].map((specialty) => (
                  <span 
                    key={specialty}
                    className="px-4 py-2 bg-card text-foreground rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden card-hover">
              <img
                src={clinicaGabinete}
                alt="Gabinete dental moderno en Clínicas Bocaboca"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-background">
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
            Visita cualquiera de nuestras 3 clínicas en Málaga y conoce a nuestro equipo. 
            Primera consulta gratuita y sin compromiso.
          </p>
          <Button asChild size="lg" className="cta-accent rounded-full px-8 h-14 text-lg">
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
