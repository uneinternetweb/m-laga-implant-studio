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
  name: 'Bocaboca Clínicas Dentales',
  url: 'https://www.implantesdentalesenmalaga.com',
  description: 'Clínicas dentales especializadas en implantes dentales en Málaga. Primera consulta gratis.',
};

const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Bocaboca Clínicas Dentales',
  url: 'https://www.implantesdentalesenmalaga.com',
  logo: 'https://clinicadentalbocaboca.com/wp-content/uploads/2026/04/Logo_bocaboca.jpg',
  description: 'Clínicas dentales especializadas en implantes dentales en Málaga. Primera consulta gratis.',
  priceRange: '€€',
  telephone: '+34951178110',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  location: [
    {
      '@type': 'Dentist',
      name: 'Bocaboca Clínica Ayala',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Ayala, 80',
        addressLocality: 'Málaga',
        postalCode: '29002',
        addressCountry: 'ES',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        reviewCount: '451',
      },
    },
    {
      '@type': 'Dentist',
      name: 'Bocaboca Clínica Martínez Maldonado',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C/ Martínez Maldonado, 65',
        addressLocality: 'Málaga',
        postalCode: '29007',
        addressCountry: 'ES',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '328',
      },
    },
    {
      '@type': 'Dentist',
      name: 'Bocaboca Clínica Velázquez',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Avda. de Velázquez, 73',
        addressLocality: 'Málaga',
        postalCode: '29004',
        addressCountry: 'ES',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '225',
      },
    },
  ],
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Implantes Dentales en Málaga | Bocaboca Clínicas Dentales"
        description="Especialistas en implantes dentales en Málaga. 3 clínicas en Málaga, más de 1.000 reseñas verificadas. Primera consulta gratuita. Llama al 951 178 110."
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
