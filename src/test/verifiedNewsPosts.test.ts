import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { verifiedNewsPosts } from '@/data/verifiedNewsPosts';
import { newsPosts } from '@/data/newsPosts';

describe('Verified news publication requirements', () => {
  it('adds exactly two unique articles without removing the twenty existing articles', () => {
    expect(verifiedNewsPosts).toHaveLength(2);
    expect(newsPosts).toHaveLength(22);
    expect(new Set(newsPosts.map(post => post.slug)).size).toBe(22);
    expect(newsPosts.slice(0, 2)).toEqual(verifiedNewsPosts);
  });

  it('does not invent authorship or a medical reviewer for the new articles', () => {
    for (const post of verifiedNewsPosts) {
      expect(post.author).toBe('');
      expect(post.omitAuthor).toBe(true);
      expect(post.date).toBe('2026-11-02');
    }
  });

  it('includes each article exactly once in the canonical-domain sitemap with its own content date', () => {
    const sitemap = readFileSync('public/sitemap.xml', 'utf8');
    for (const post of verifiedNewsPosts) {
      const location = `https://www.implantesdentalesenmalaga.com/noticias/${post.slug}`;
      expect(sitemap.split(`<loc>${location}</loc>`)).toHaveLength(2);
      expect(sitemap).toContain(`<loc>${location}</loc>\n    <lastmod>${post.date}</lastmod>`);
    }
  });

  it('uses existing contextual treatment destinations for both articles', () => {
    expect(verifiedNewsPosts[0].content).toContain('](/protesis-dentales)');
    expect(verifiedNewsPosts[1].content).toContain('](/implantes-dentales)');
    const existing = new Set(['/contacto', '/protesis-dentales', '/protesis-sobre-implantes', '/implantes-dentales']);
    for (const post of verifiedNewsPosts) {
      const destinations = Array.from(post.content.matchAll(/\]\((\/[^)]+)\)/g), match => match[1]);
      expect(destinations.length).toBeGreaterThan(0);
      for (const destination of destinations) expect(existing.has(destination)).toBe(true);
    }
  });
});