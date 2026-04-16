import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';

const PoliticaCookies = () => {
  return (
    <Layout>
      <SEOHead
        title="Política de Cookies | Bocaboca Clínicas Dentales"
        description="Información sobre el uso de cookies técnicas en el sitio web de Bocaboca Clínicas Dentales."
        canonical="/politica-de-cookies"
        noindex={true}
      />
      <section className="hero-section py-16 md:py-20">
        <div className="container-narrow">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Política de Cookies
          </h1>
          <p className="text-primary-foreground/80 mt-4 text-lg">
            Información sobre el uso de cookies en este sitio web
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="text-muted-foreground mb-6">
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
            Se utilizan para que el sitio web funcione correctamente y ofrezca una mejor experiencia de usuario.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Cookies que utilizamos
          </h2>
          <p className="text-muted-foreground mb-6">
            Este sitio web utiliza cookies propias y técnicas necesarias para su correcto funcionamiento.
          </p>
          <p className="text-muted-foreground mb-6">
            Las cookies técnicas son aquellas que permiten al usuario la navegación a través de una página web y la 
            utilización de las diferentes opciones o servicios que en ella existen, como por ejemplo controlar el tráfico 
            y la comunicación de datos, identificar la sesión o acceder a partes de acceso restringido.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Cookies de terceros
          </h2>
          <p className="text-muted-foreground mb-6">
            Este sitio web no utiliza cookies de análisis, publicidad ni de terceros con fines de seguimiento.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Gestión de cookies
          </h2>
          <p className="text-muted-foreground mb-6">
            Dado que este sitio web solo utiliza cookies técnicas imprescindibles para su funcionamiento, 
            no es necesario ofrecer opciones de configuración avanzada. Puede configurar su navegador para 
            bloquear o eliminar cookies, aunque esto puede afectar al correcto funcionamiento del sitio web.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Más información
          </h2>
          <p className="text-muted-foreground mb-6">
            Para más información sobre el tratamiento de sus datos personales, consulte nuestra{' '}
            <a href="/privacidad" className="text-primary underline hover:opacity-80">
              Política de Privacidad
            </a>.
          </p>
          <p className="text-muted-foreground mb-6">
            Si tiene cualquier duda puede contactarnos a través de{' '}
            <a href="mailto:info@clinicadentalbocaboca.com" className="text-primary underline hover:opacity-80">
              info@clinicadentalbocaboca.com
            </a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaCookies;
