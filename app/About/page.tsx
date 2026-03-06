import { Navbar, PageHero, WhoWeAre, WhyTrustUs, ContactSection, Footer } from "../components";

export const metadata = {
  title: "About Us | FIGO CARE LTD - Healthcare Recruitment Specialists UK",
  description: "Discover Figo Care, a premier UK healthcare staffing agency dedicated to placing skilled, compassionate professionals into healthcare settings nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="About Figo Care"
          subtitle="Delivering Trusted Healthcare Professionals Across the UK"
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
