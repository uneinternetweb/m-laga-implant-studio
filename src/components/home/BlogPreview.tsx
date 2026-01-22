import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { newsPosts } from '@/data/newsPosts';

const BlogPreview = () => {
  const latestPosts = newsPosts.slice(0, 3);

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Noticias
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Noticias y Consejos sobre Implantes
            </h2>
          </div>
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ver todas las noticias
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <article 
              key={post.slug}
              className="group bg-card rounded-2xl overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to={`/noticias/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/noticias/${post.slug}`}
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
  );
};

export default BlogPreview;
