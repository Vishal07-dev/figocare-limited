import { Navbar, PageHero, WhoWeAre, WhyTrustUs, ContactSection, Footer } from "../components";

export const metadata = {
  title: "About Us | FIGO CARE LTD - UK Healthcare Staffing Agency",
  description: "Learn about FIGO CARE LTD, a leading UK healthcare recruitment agency committed to providing skilled, compassionate healthcare professionals across the United Kingdom.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Caring Hands, Trusted Support"
          subtitle="Supplying Compassionate Healthcare Staff When You Need Them Most"
          image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop"
        />
        <WhoWeAre />
        <WhyTrustUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
