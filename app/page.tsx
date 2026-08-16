import { HeroSection } from "@/app/components/hero-section";
import { MenuSection } from "@/app/components/menu-section";
import { TestimonialsSection } from "@/app/components/testimonials-section";
import { LocationSection } from "@/app/components/location-section";
import { SiteFooter } from "@/app/components/site-footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <TestimonialsSection />
      <LocationSection />
      <SiteFooter />
    </main>
  );
}
