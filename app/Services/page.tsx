import { Navbar, PageHero, WhereWeWork, ContactSection, Footer } from "../components";

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
          image="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop"
        />
        <WhereWeWork />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
