import { Header, Hero, Services, Work, Testimonials, Pricing, Faq, Contact, Footer } from "@/components/Sections";

// 100% server components: the page ships no component JS and no animation library.
export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
