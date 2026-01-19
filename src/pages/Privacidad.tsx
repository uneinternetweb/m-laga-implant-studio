import Layout from '@/components/layout/Layout';

const Privacidad = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-20">
        <div className="container-narrow">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Política de Privacidad
          </h1>
          <p className="text-primary-foreground/80 mt-4 text-lg">
            Información sobre el tratamiento de tus datos personales
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
            Responsable del Tratamiento
          </h2>
          <p className="text-muted-foreground mb-4">
            <strong>Identidad:</strong> BOCABOCA DENTAL S.L.<br />
            <strong>CIF:</strong> B93517540<br />
            <strong>Dirección:</strong> C/ Ayala, 3, 29002 Málaga<br />
            <strong>Teléfono:</strong> 951 178 110<br />
            <strong>Email:</strong> info@clinicadentalbocaboca.com
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Finalidad del Tratamiento
          </h2>
          <p className="text-muted-foreground mb-4">
            Los datos personales que nos proporcione serán tratados con las siguientes finalidades:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>Gestión de citas y servicios odontológicos.</li>
            <li>Elaboración del historial clínico dental.</li>
            <li>Facturación y gestión administrativa.</li>
            <li>Envío de comunicaciones relacionadas con su tratamiento.</li>
            <li>Envío de información comercial sobre nuestros servicios (solo si ha dado su consentimiento).</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Legitimación del Tratamiento
          </h2>
          <p className="text-muted-foreground mb-4">
            La base legal para el tratamiento de sus datos es:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>La ejecución de un contrato de prestación de servicios sanitarios.</li>
            <li>El cumplimiento de obligaciones legales aplicables.</li>
            <li>Su consentimiento expreso para el envío de comunicaciones comerciales.</li>
            <li>El interés legítimo para la mejora de nuestros servicios.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Destinatarios de los Datos
          </h2>
          <p className="text-muted-foreground mb-4">
            Sus datos podrán ser comunicados a:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>Administraciones públicas cuando exista obligación legal.</li>
            <li>Compañías aseguradoras en caso de tener seguro dental.</li>
            <li>Laboratorios dentales para la fabricación de prótesis.</li>
            <li>Proveedores de servicios necesarios para la gestión de la clínica.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Conservación de los Datos
          </h2>
          <p className="text-muted-foreground mb-4">
            Los datos personales serán conservados durante el tiempo necesario para cumplir con la 
            finalidad para la que se recabaron y para determinar las posibles responsabilidades que 
            pudieran derivarse de dicha finalidad y del tratamiento de los datos.
          </p>
          <p className="text-muted-foreground mb-4">
            La historia clínica será conservada durante un mínimo de 5 años desde la última asistencia, 
            conforme a la normativa sanitaria aplicable. En determinados casos, podrá ser necesaria una 
            conservación más prolongada según la normativa específica.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Derechos del Interesado
          </h2>
          <p className="text-muted-foreground mb-4">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted.</li>
            <li><strong>Rectificación:</strong> Modificar datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
            <li><strong>Limitación:</strong> Solicitar que limitemos el tratamiento en determinadas circunstancias.</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado y de uso común.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Para ejercer estos derechos, puede contactar con nosotros en info@clinicadentalbocaboca.com 
            o dirigirse a nuestra dirección postal indicando el derecho que desea ejercer.
          </p>
          <p className="text-muted-foreground mb-4">
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección 
            de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Medidas de Seguridad
          </h2>
          <p className="text-muted-foreground mb-4">
            En BOCABOCA DENTAL S.L. hemos adoptado las medidas técnicas y organizativas necesarias 
            para garantizar la seguridad de los datos de carácter personal y evitar su alteración, 
            pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, 
            la naturaleza de los datos y los riesgos a los que están expuestos.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Cookies
          </h2>
          <p className="text-muted-foreground mb-4">
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, 
            realizar análisis estadísticos y mostrar publicidad personalizada. Puede obtener más información 
            y configurar sus preferencias en nuestra Política de Cookies.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            Modificaciones de la Política de Privacidad
          </h2>
          <p className="text-muted-foreground mb-4">
            BOCABOCA DENTAL S.L. se reserva el derecho de modificar la presente política de privacidad 
            para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, anunciará 
            en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
          </p>

          <p className="text-muted-foreground mt-10 text-sm">
            <em>Última actualización: Enero 2024</em>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacidad;
