import { HeroSection } from "@/app/components/hero-section";
import { MenuSection } from "@/app/components/menu-section";
import { TestimonialsSection } from "@/app/components/testimonials-section";
import { LocationSection } from "@/app/components/location-section";
import { SiteFooter } from "@/app/components/site-footer";

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pollitos con Papas",
  image: "https://www.pollitosconpapas.cl/icon.svg",
  url: "https://www.pollitosconpapas.cl",
  telephone: "+56912345678",
  priceRange: "$$",
  servesCuisine: "Chilena",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pasaje Chañaral 510",
    addressLocality: "Copiapó",
    addressRegion: "Atacama",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.3677,
    longitude: -70.3304,
  },
  openingHours: "Mo-Su 12:00-22:30",
  sameAs: ["https://www.instagram.com", "https://www.facebook.com"],
  description:
    "Pollitos con Papas ofrece pollo asado, papas fritas y comida tradicional chilena con sabor casero en Copiapó.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <HeroSection />
        <MenuSection />
        <TestimonialsSection />
        <LocationSection />
        <SiteFooter />
      </main>
    </>
  );
}
