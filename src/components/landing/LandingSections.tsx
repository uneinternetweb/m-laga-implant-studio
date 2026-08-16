import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type Faq = { question: string; answer: string };
export type Reference = { text: string; url: string };

interface LandingHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

export const LandingHero = ({ eyebrow, title, intro, bullets, image, imageAlt }: LandingHeroProps) => (
  <section className="hero-section py-16 md:py-24">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground">
          <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            {eyebrow}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">{title}</h1>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">{intro}</p>
          <div className="flex flex-wrap gap-4 mb-8">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="cta-gold rounded-full px-8 h-14 text-lg">
              <Link to="/contacto">
                Solicitar valoración
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+34951178110">
                <Phone className="w-5 h-5 mr-2" />
                951 178 110
              </a>
            </Button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden">
            <img src={image} alt={imageAlt} className="w-full h-auto" loading="eager" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

interface SectionProps {
  eyebrow?: string;
  title: string;
  id?: string;
  muted?: boolean;
  children: ReactNode;
}

export const LandingSection = ({ eyebrow, title, id, muted = false, children }: SectionProps) => (
  <section id={id} className={`section-padding ${muted ? 'bg-muted' : 'bg-background'}`}>
    <div className="container-narrow">
      {eyebrow && (
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">{eyebrow}</span>
      )}
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">{children}</div>
    </div>
  </section>
);

export const FaqBlock = ({ faqs }: { faqs: Faq[] }) => (
  <section className="section-padding bg-muted">
    <div className="container-narrow">
      <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Dudas frecuentes</span>
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-8">
        Preguntas frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.question} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-base md:text-lg">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export const ReferencesBlock = ({ references }: { references: Reference[] }) => (
  <section className="py-12 bg-background border-t border-border">
    <div className="container-narrow">
      <h2 className="font-display text-lg font-bold text-foreground mb-4">Referencias científicas</h2>
      <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
        {references.map((r) => (
          <li key={r.url}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-primary underline underline-offset-2"
            >
              {r.text}
            </a>
          </li>
        ))}
      </ol>
      <p className="text-xs text-muted-foreground mt-4">
        Esta información es divulgativa y no sustituye a un diagnóstico profesional. Los resultados
        dependen de cada caso clínico y deben valorarse en consulta.
      </p>
    </div>
  </section>
);

export const LandingCta = ({ title, text }: { title: string; text: string }) => (
  <section className="py-14 bg-primary">
    <div className="container-narrow text-center text-primary-foreground">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{title}</h2>
      <p className="text-primary-foreground/85 mb-6">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="cta-gold rounded-full px-8">
          <Link to="/contacto">Pedir cita</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <a href="tel:+34951178110">
            <Phone className="w-5 h-5 mr-2" />
            951 178 110
          </a>
        </Button>
      </div>
    </div>
  </section>
);
