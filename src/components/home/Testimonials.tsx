import { Star, Play } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      id: 'video1',
      name: 'Paciente de Implantes',
      treatment: 'Implantes Dentales',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://clinicadentalbocaboca.com/tratamientos-dentales-malaga-testimonios/',
    },
    {
      id: 'video2',
      name: 'Paciente de Ortodoncia',
      treatment: 'Ortodoncia Invisible',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://clinicadentalbocaboca.com/tratamientos-dentales-malaga-testimonios/',
    },
    {
      id: 'video3',
      name: 'Paciente de Estética',
      treatment: 'Carillas Dentales',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://clinicadentalbocaboca.com/tratamientos-dentales-malaga-testimonios/',
    },
  ];

  return (
    <section className="section-padding hero-section">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonios Reales
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-6">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Historias reales de pacientes que han recuperado su sonrisa en Clínicas Bocaboca.
            Más de 20 años cuidando sonrisas en Málaga.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videoTestimonials.map((testimonial, index) => (
            <a
              key={testimonial.id}
              href="https://clinicadentalbocaboca.com/tratamientos-dentales-malaga-testimonios/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 animate-fade-up hover:border-secondary/50 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video bg-primary/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.treatment}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA to see all testimonials */}
        <div className="text-center">
          <a
            href="https://clinicadentalbocaboca.com/tratamientos-dentales-malaga-testimonios/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Play className="w-5 h-5" />
            Ver Todos los Testimonios en Vídeo
          </a>
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
              <p className="text-sm text-primary-foreground/60">+500 reseñas en Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
