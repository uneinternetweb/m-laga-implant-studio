import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import doctorAlfonso from '@/assets/doctor-alfonso.jpg';
import teamBocaboca from '@/assets/team-bocaboca.png';

const Team = () => {
  const team = [
    {
      name: 'Dr. Alfonso Moreno Sánchez',
      role: 'Director Médico',
      image: doctorAlfonso,
      description: 'Director médico de Clínicas Bocaboca. Más de 20 años de experiencia en cirugía oral, implantología y periodoncia. Miembro de SECIB, SEPA y SEI.',
      credentials: [
        'Licenciado en Odontología - Universidad de Granada (1997)',
        'Máster en Cirugía Oral, Implantología y Periodoncia - UMA',
        'Miembro SECIB, SEPA y SEI',
      ],
    },
    {
      name: 'Equipo Bocaboca',
      role: 'Especialistas Multidisciplinares',
      image: teamBocaboca,
      description: 'Más de 10 doctores especializados en todas las áreas de la odontología: implantología, periodoncia, ortodoncia, estética dental, cirugía maxilofacial y odontopediatría.',
      credentials: [
        'Formación continua y actualización permanente',
        'Tratamientos personalizados y consensuados',
        'Pioneros en técnicas vanguardistas',
      ],
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
            Profesionales Especializados en Málaga
          </h2>
          <p className="text-muted-foreground text-lg">
            Un equipo multidisciplinar con más de 10 doctores especializados en todas las áreas 
            de la odontología, comprometidos con tu salud bucodental.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <ul className="space-y-2">
                  {member.credentials.map((credential, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
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
            Conocer más sobre el equipo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
