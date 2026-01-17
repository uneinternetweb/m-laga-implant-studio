import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Noticias y Consejos sobre Implantes Dentales
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Información útil y actualizada sobre implantología dental, cuidados, 
              precios y todo lo que necesitas saber antes de tu tratamiento en Málaga.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Featured Post */}
          <article className="bg-card rounded-3xl overflow-hidden card-hover mb-12 animate-fade-up">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={blogPosts[0].date}>{blogPosts[0].dateFormatted}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  <Link to={`/blog/${blogPosts[0].slug}`} className="hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Leer artículo completo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article 
                key={post.slug}
                className="group bg-card rounded-2xl overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{post.dateFormatted}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Tienes Más Preguntas?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Nuestro equipo de especialistas en implantes dentales está disponible 
            para resolver todas tus dudas.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 cta-gold px-8 py-3 rounded-full font-semibold"
          >
            Contactar con nosotros
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
