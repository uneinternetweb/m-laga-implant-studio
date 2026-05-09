import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

const BASE_URL = 'https://www.implantesdentalesenmalaga.com';
const DEFAULT_OG_IMAGE =
  'https://clinicadentalbocaboca.com/wp-content/uploads/2026/04/Logo_bocaboca.jpg';

const SEOHead = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  noindex = false,
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    // Ensure html lang is set for SEO/geotargeting
    document.documentElement.setAttribute('lang', 'es-ES');

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const image = ogImage || DEFAULT_OG_IMAGE;
    const fullUrl = `${BASE_URL}${canonical}`;

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('author', 'Clínica Dental Bocaboca');
    setMeta('theme-color', '#002b5c');
    setMeta('geo.region', 'ES-MA');
    setMeta('geo.placename', 'Málaga');

    // Open Graph
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:locale', 'es_ES', true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:site_name', 'Clínica Dental Bocaboca', true);
    setMeta('og:image', image, true);
    setMeta('og:image:alt', ogTitle || title, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', image);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullUrl);

    // hreflang (single language site, self-referencing + x-default)
    const setHreflang = (hreflang: string) => {
      let el = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', fullUrl);
    };
    setHreflang('es-ES');
    setHreflang('x-default');

    // Structured data
    const existingScripts = document.querySelectorAll('script[data-seo-ld]');
    existingScripts.forEach((s) => s.remove());

    if (structuredData) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData];
      items.forEach((data) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-ld', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    return () => {
      const scripts = document.querySelectorAll('script[data-seo-ld]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogType, ogImage, noindex, structuredData]);

  return null;
};

export default SEOHead;
