import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Team from '@/components/home/Team';
import Testimonials from '@/components/home/Testimonials';
import BlogPreview from '@/components/home/BlogPreview';
import SEOHead from '@/components/SEOHead';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Clínica Dental Bocaboca',
  url: 'https://clinicadentalbocaboca.com',
  description: 'Clínica dental especializada en implantes dentales en Málaga con más de 20 años de experiencia.',
};

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Clínica Dental Bocaboca',
  description: 'Clínica dental especializada en implantes dentales en Málaga. Más de 20 años de experiencia, tecnología 3D y cirugía guiada.',
  telephone: '+34951178110',
  email: 'info@clinicadentalbocaboca.com',
  url: 'https://clinicadentalbocaboca.com',
  image: 'https://clinicadentalbocaboca.com/og-image.jpg',
  priceRange: '€€',
  medicalSpecialty: 'Implantology',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Ayala, 80',
      addressLocality: 'Málaga',
      postalCode: '29002',
      addressRegion: 'Málaga',
      addressCountry: 'ES',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Martínez Maldonado, 65',
      addressLocality: 'Málaga',
      postalCode: '29007',
      addressRegion: 'Málaga',
      addressCountry: 'ES',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Avda. de Velázquez, 73',
      addressLocality: 'Málaga',
      postalCode: '29004',
      addressRegion: 'Málaga',
      addressCountry: 'ES',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.7213,
    longitude: -4.4214,
  },
  areaServed: {
    '@type': 'City',
    name: 'Málaga',
  },
  sameAs: [
    'https://www.facebook.com/clinicadentalbocaboca',
    'https://www.instagram.com/clinicadentalbocaboca',
    'https://www.youtube.com/@clinicadentalbocaboca',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamientos Dentales',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Implantes Dentales',
          description: 'Implantes dentales de titanio con garantía de por vida',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Prótesis Dentales',
          description: 'Prótesis dentales fijas, removibles y sobre implantes',
        },
      },
    ],
  },
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Implantes Dentales en Málaga | Clínica Dental Bocaboca | Primera Consulta Gratis"
        description="Clínica Dental Bocaboca: especialistas en implantes dentales en Málaga. 3 clínicas, más de 20 años de experiencia, tecnología 3D y financiación sin intereses. Primera consulta gratuita."
        canonical="/"
        structuredData={[websiteSchema, dentistSchema]}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <BlogPreview />
    </Layout>
  );
};

export default Index;
