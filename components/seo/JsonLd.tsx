import { siteConfig } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n/dict";
import { FAQ as FAQ_CONTENT } from "@/lib/content";

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

export function OrganizationJsonLd({ lang = "en" }: { lang?: Lang }) {
  const dict = getDict(lang);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: siteConfig.name,
        url: `${siteConfig.url}/${lang}`,
        description: dict.site.description,
        logo: `${siteConfig.url}/icon.svg`,
        image: `${siteConfig.url}/opengraph-image`,
        founder: { "@id": PERSON_ID },
        areaServed: "Worldwide",
        priceRange: "$99 – $100,000+",
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
        sameAs: [siteConfig.contacts.whatsappUrl, siteConfig.contacts.messengerUrl, siteConfig.contacts.github],
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

export function PersonJsonLd({ lang = "en" }: { lang?: Lang }) {
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
        url: `${siteConfig.url}/${lang}`,
      }}
    />
  );
}

export function WebsiteJsonLd({ lang = "en" }: { lang?: Lang }) {
  const dict = getDict(lang);
  const inLanguage =
    lang === "ru" ? "ru-RU" : lang === "ka" ? "ka-GE" : lang === "hy" ? "hy-AM" : "en-US";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/${lang}`,
        name: siteConfig.name,
        description: dict.site.description,
        publisher: { "@id": ORG_ID },
        inLanguage,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/${lang}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function FaqJsonLd({ lang = "en" }: { lang?: Lang }) {
  const dict = getDict(lang);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((f) => ({
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
  lang = "en",
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
  lang?: Lang;
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
        url: `${siteConfig.url}/${lang}/blog/${slug}`,
        author: { "@id": PERSON_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: `${siteConfig.url}/${lang}/blog/${slug}`,
      }}
    />
  );
}
