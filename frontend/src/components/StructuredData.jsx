import { useEffect } from 'react';
import { faqsData } from './FAQ';
import { services } from './Services';

const SITE_URL = 'https://www.shiftcode.dev';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'ShiftCode',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/apple-touch-icon.png`,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    'ShiftCode is a modern web studio building high-impact websites, UI/UX design, cybersecurity, and hosting solutions for startups and established companies.',
  email: 'shiftcode.lb@gmail.com',
  sameAs: [
    'https://www.instagram.com/shiftcode_/',
    'https://github.com/shiftcode-lb',
  ],
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE_URL,
  name: 'ShiftCode',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

const buildFaqSchema = () => ({
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faqsData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

const buildServicesSchema = () => ({
  '@type': 'Service',
  '@id': `${SITE_URL}/#services`,
  provider: { '@id': ORG_ID },
  serviceType: 'Web Development & Design',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ShiftCode Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
      },
    })),
  },
});

// Injects one JSON-LD <script> per schema object into <head>, and cleans
// up on unmount so nothing duplicates across route changes.
// NOTE: Organization + WebSite schema live statically in index.html
// (crawlable even without JS running) — only the schemas that depend on
// live component data (Services, FAQ) are injected here, so nothing is
// duplicated between the two.
const StructuredData = () => {
  useEffect(() => {
    const schemas = [buildServicesSchema(), buildFaqSchema()];

    const nodes = schemas.map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({ '@context': 'https://schema.org', ...schema });
      document.head.appendChild(script);
      return script;
    });

    return () => {
      nodes.forEach((n) => n.remove());
    };
  }, []);

  return null;
};

export default StructuredData;
