import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';

const Team = () => {
  const team = [
    {
      name: 'Dr. Carlos Martínez',
      role: 'Director Médico - Implantólogo',
      image: doctor1,
      description: 'Más de 20 años de experiencia en implantología oral. Formación en las universidades de Barcelona y Nueva York.',
    },
    {
      name: 'Dra. María García',
      role: 'Especialista en Periodoncia',
      image: doctor2,
      description: 'Especializada en salud de encías y mantenimiento de implantes. Doctora por la Universidad de Málaga.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nuestro Equipo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Profesionales de Confianza en Málaga
          </h2>
          <p className="text-muted-foreground text-lg">
            Un equipo multidisciplinar de especialistas comprometidos con tu salud bucodental 
            y la excelencia en cada tratamiento.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="group bg-card rounded-3xl overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/sobre-nosotros"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Conocer a todo el equipo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
