import { Navbar, PageHero, WhereWeWork, Footer } from "../components";

export const metadata = {
  title: "Our Services | FIGO CARE LTD - Specialist Healthcare Staffing UK",
  description: "Figo Care delivers bespoke healthcare workforce solutions for private hospitals, nursing homes, residential care, community health centres, and mental health facilities.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Our Services"
          subtitle="Tailored Workforce Solutions for Every Healthcare Setting"
          image="/images/services-hero.jpg"
        />
        <WhereWeWork variant="primary" />
      </main>
      <Footer />
    </>
  );
}
