import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Phone, Stethoscope, Newspaper } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const links = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/implantes-dentales", label: "Implantes Dentales", icon: Stethoscope },
    { href: "/protesis-dentales", label: "Prótesis Dentales", icon: Stethoscope },
    { href: "/noticias", label: "Noticias", icon: Newspaper },
    { href: "/contacto", label: "Contacto", icon: Phone },
  ];

  return (
    <Layout>
      <SEOHead
        title="Página no encontrada (404) | Bocaboca Clínicas Dentales"
        description="La página que buscas no existe. Vuelve a la portada o explora nuestros tratamientos de implantes dentales en Málaga."
        canonical={location.pathname}
        noindex
      />
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Error 404
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            La página que buscas no existe
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Es posible que el enlace esté roto o que la página haya sido movida.
            Te dejamos algunas secciones útiles para continuar tu visita.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className="bg-card border border-border rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all flex flex-col items-center gap-2"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
