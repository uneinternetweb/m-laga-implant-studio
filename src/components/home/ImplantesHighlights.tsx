import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Workflow, Zap, HelpCircle, Wallet, Bone } from 'lucide-react';

const ImplantesHighlights = () => {
  const blocks = [
    {
      to: '/implantes-dentales',
      icon: Layers,
      title: 'Tipos de implantes dentales',
      text: 'Unitarios, puentes sobre implantes, sobredentaduras y rehabilitaciones de arcada completa.',
    },
    {
      to: '/implantes-dentales',
      icon: Workflow,
      title: 'Fases del tratamiento',
      text: 'Diagnóstico digital, fase quirúrgica, osteointegración y colocación de la prótesis definitiva.',
    },
    {
      to: '/implantes-dentales',
      icon: Zap,
      title: 'Carga inmediata',
      text: 'Cuándo es posible colocar el implante y un diente provisional fijo en la misma sesión.',
    },
    {
      to: '/implantes-all-on-4',
      icon: Bone,
      title: 'All-on-4 y falta de hueso',
      text: 'Rehabilitación completa con 4 implantes cuando hay reabsorción ósea, sin injertos en muchos casos.',
    },
    {
      to: '/implantes-dentales#precio',
      icon: Wallet,
      title: 'Factores que influyen en el precio',
      text: 'Número de implantes, tipo de prótesis, injertos previos y estudios diagnósticos.',
    },
    {
      to: '/implantes-dentales',
      icon: HelpCircle,
      title: 'Preguntas frecuentes',
      text: 'Anestesia, duración, edad, mantenimiento y qué hacer si hay falta de hueso.',
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Implantes Dentales en Málaga
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Todo lo que necesitas saber antes de tu tratamiento
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos las dudas más habituales sobre los implantes dentales para que tomes la
            mejor decisión, con información clara y rigor clínico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <Link
              key={b.title}
              to={b.to}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{b.text}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Más información
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/implantes-dentales"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ver la guía completa de implantes dentales en Málaga
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImplantesHighlights;
