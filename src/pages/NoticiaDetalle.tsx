import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="font-display text-xl font-bold text-foreground mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        inList = true;
        listItems.push(trimmed.substring(2));
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground mb-2">
            {trimmed.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmed.startsWith('|')) {
        // Skip table formatting for now
      } else if (trimmed !== '') {
        flushList();
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container-narrow">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{post.dateFormatted}</time>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-narrow -mt-8 mb-12 relative z-10">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto aspect-video object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="section-padding bg-background pt-0">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              ¿Necesitas Más Información?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nuestro equipo de especialistas en implantes dentales está a tu disposición 
              para resolver cualquier duda sobre tu caso particular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="cta-gold rounded-full px-8 h-12">
                <Link to="/contacto">
                  Solicitar Consulta Gratuita
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-full px-8 h-12"
              >
                <a href="tel: +34951 178 110">
                  <Phone className="w-5 h-5 mr-2" />
                  951 178 110
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {prevPost ? (
                <Link 
                  to={`/blog/${prevPost.slug}`}
                  className="group flex-1 bg-card rounded-xl p-6 card-hover"
                >
                  <span className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    Artículo anterior
                  </span>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : <div className="flex-1" />}
              
              {nextPost ? (
                <Link 
                  to={`/blog/${nextPost.slug}`}
                  className="group flex-1 bg-card rounded-xl p-6 card-hover text-right"
                >
                  <span className="text-sm text-muted-foreground flex items-center justify-end gap-2 mb-2">
                    Artículo siguiente
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
