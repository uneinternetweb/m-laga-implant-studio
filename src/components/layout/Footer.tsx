import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo-bocaboca.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const clinics = [
    {
      name: 'Clínica Ayala',
      address: 'Calle Ayala, 80',
      zip: '29002 Málaga',
    },
    {
      name: 'Clínica Martínez Maldonado',
      address: 'C/ Martínez Maldonado, 65',
      zip: '29007 Málaga',
    },
    {
      name: 'Clínica Velázquez',
      address: 'Avda. de Velázquez, 73',
      zip: '29004 Málaga',
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="py-12 bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            ¿Listo para recuperar tu sonrisa?
          </h2>
          <p className="text-secondary-foreground/90 mb-6 text-lg">
            Solicita tu primera consulta gratuita con nuestros especialistas en implantes dentales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Cita
            </Link>
            <a
              href="tel:+34951178110"
              className="inline-flex items-center justify-center bg-secondary-foreground text-secondary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity gap-2"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="mb-6">
                <img 
                  src={logo} 
                  alt="Clínica Dental Bocaboca" 
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Clínica dental especializada en implantes dentales en Málaga. Más de 20 años 
                devolviendo sonrisas con la última tecnología y los mejores profesionales.
              </p>
              {/* Social */}
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/clinicadentalbocaboca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/clinicadentalbocaboca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@clinicadentalbocaboca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Tratamientos</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/implantes-dentales" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Implantes Dentales
                  </Link>
                </li>
                <li>
                  <Link to="/protesis-dentales" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Prótesis Dentales
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Nuestro Equipo
                  </Link>
                </li>
                <li>
                  <Link to="/noticias" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Clinics */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Nuestras Clínicas</h3>
              <ul className="space-y-4">
                {clinics.map((clinic) => (
                  <li key={clinic.name} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                    <div className="text-primary-foreground/80">
                      <p className="font-medium text-primary-foreground">{clinic.name}</p>
                      <p className="text-sm">{clinic.address}</p>
                      <p className="text-sm">{clinic.zip}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                  <a href="tel:+34951178110" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    951 178 110
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                  <a href="mailto:info@clinicadentalbocaboca.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    info@clinicadentalbocaboca.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                  <div className="text-primary-foreground/80">
                    <p className="font-medium text-primary-foreground">Horario</p>
                    <p className="text-sm">Lunes - Viernes: 09:00 - 21:00</p>
                    <p className="text-sm">Sábados: 10:00 - 14:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Clínicas Dentales Bocaboca. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-primary-foreground transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
