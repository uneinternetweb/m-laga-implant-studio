import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Antonio R.',
      location: 'Málaga Centro',
      rating: 5,
      text: 'Llevaba años con miedo al dentista y aquí me trataron con una paciencia increíble. Mis implantes quedaron perfectos y el proceso fue mucho más fácil de lo que imaginaba.',
    },
    {
      name: 'Carmen L.',
      location: 'Torremolinos',
      rating: 5,
      text: 'Después de probar en otras clínicas, encontré aquí a verdaderos profesionales. La tecnología 3D que usan hace todo más rápido y preciso. Muy recomendable.',
    },
    {
      name: 'Francisco M.',
      location: 'Marbella',
      rating: 5,
      text: 'Me pusieron 4 implantes con la técnica de carga inmediata. Salí el mismo día con mis dientes fijos. El Dr. Martínez es un crack.',
    },
  ];

  return (
    <section className="section-padding hero-section">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-6">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            La satisfacción de nuestros pacientes de Málaga y la Costa del Sol 
            es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-secondary mb-4" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card/10 backdrop-blur-sm rounded-full px-8 py-4 border border-primary-foreground/10">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-primary-foreground">4.9 / 5</p>
              <p className="text-sm text-primary-foreground/60">+200 reseñas en Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
