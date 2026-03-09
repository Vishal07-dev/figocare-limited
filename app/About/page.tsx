import { Navbar, PageHero, WhoWeAre, WhyTrustUs, Footer } from "../components";

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
          image="/images/about-hero.jpg"
        />
        <WhoWeAre variant="white" />
        <WhyTrustUs variant="primary" />
      </main>
      <Footer />
    </>
  );
}
