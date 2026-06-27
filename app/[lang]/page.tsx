import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Portfolio } from "@/components/Portfolio";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { getDict, type Lang } from "@/lib/i18n/dict";
import { isValidLang, LANGS } from "@/lib/i18n";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = (isValidLang(raw) ? raw : "en") as Lang;

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden">
      <FaqJsonLd lang={lang} />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <TechStack />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
