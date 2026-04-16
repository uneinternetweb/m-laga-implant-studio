import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

const BASE_URL = 'https://www.implantesdentalesenmalaga.com';

const SEOHead = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

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

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:locale', 'es_ES', true);
    setMeta('og:url', `${BASE_URL}${canonical}`, true);
    setMeta('og:site_name', 'Clínica Dental Bocaboca', true);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${BASE_URL}${canonical}`);

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
  }, [title, description, canonical, ogTitle, ogDescription, ogType, noindex, structuredData]);

  return null;
};

export default SEOHead;
