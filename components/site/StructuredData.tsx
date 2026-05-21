import { siteConfig } from "@/lib/site";
import { events } from "@/content/events";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: siteConfig.name,
  alternateName: "DEF",
  url: siteConfig.url,
  email: siteConfig.emails.info,
  foundingDate: String(siteConfig.founded),
  taxID: siteConfig.ein,
  description: siteConfig.description,
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 245",
    addressLocality: "Dedham",
    addressRegion: "MA",
    postalCode: "02027",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Dedham Public Schools",
  },
};

export function StructuredData() {
  const eventSchemas = events.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    startDate: e.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: e.location,
      address: { "@type": "PostalAddress", addressLocality: "Dedham", addressRegion: "MA" },
    },
    organizer: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/events/${e.slug}`,
    description: e.shortPitch,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {eventSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
