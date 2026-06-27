import { siteConfig } from "@/lib/site";
import { FAQ } from "@/lib/content";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORG_ID = `${siteConfig.url}/#organization`;
const PERSON_ID = `${siteConfig.url}/#alexander`;

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.descriptionRu,
        logo: `${siteConfig.url}/icon.svg`,
        image: `${siteConfig.url}/opengraph-image`,
        founder: { "@id": PERSON_ID },
        areaServed: "Worldwide",
        priceRange: "$5,000 – $100,000+",
        knowsAbout: [
          "Artificial Intelligence",
          "SaaS Development",
          "Web3",
          "Telegram Mini Apps",
          "Cloud Infrastructure",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.countryCode,
        },
        sameAs: [siteConfig.contacts.messengerProfile, siteConfig.contacts.github],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: siteConfig.contacts.whatsappUrl,
          availableLanguage: ["Russian", "English"],
        },
      }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": PERSON_ID,
        name: siteConfig.founder.name,
        alternateName: siteConfig.founder.nameEn,
        jobTitle: siteConfig.founder.role,
        image: `${siteConfig.url}${siteConfig.founder.photo}`,
        worksFor: { "@id": ORG_ID },
        knowsAbout: ["AI", "Full-Stack Development", "SaaS", "Web3", "Cloud"],
        url: siteConfig.url,
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "ru-RU",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        url: `${siteConfig.url}/blog/${slug}`,
        author: { "@id": PERSON_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
      }}
    />
  );
}
