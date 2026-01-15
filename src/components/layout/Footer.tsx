import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="py-12 bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            ¿Listo para recuperar tu sonrisa?
          </h2>
          <p className="text-secondary-foreground/90 mb-6 text-lg">
            Solicita tu primera consulta gratuita con nuestros especialistas en implantes dentales en Málaga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Cita
            </Link>
            <a
              href="tel:+34952000000"
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold">ID</span>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">Implantes Dentales</p>
                  <p className="text-sm opacity-80">Málaga</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Clínica dental especializada en implantes dentales en Málaga. Más de 15 años 
                devolviendo sonrisas con la última tecnología y los mejores profesionales.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/implantes-dentales" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Implantes Dentales
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Nuestro Equipo
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Blog y Noticias
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    Calle Principal, 123<br />
                    29001 Málaga, España
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+34952000000" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    952 000 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@implantesmalaga.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    info@implantesmalaga.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Horario</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p className="font-medium text-primary-foreground">Lunes - Viernes</p>
                    <p>09:00 - 14:00 | 16:00 - 20:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 ml-8">
                  <div className="text-primary-foreground/80">
                    <p className="font-medium text-primary-foreground">Sábados</p>
                    <p>09:00 - 14:00</p>
                  </div>
                </li>
              </ul>
              {/* Social */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Implantes Dentales Málaga. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
