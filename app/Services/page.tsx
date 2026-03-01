import { Navbar, PageHero, WhereWeWork, ContactSection, Footer } from "../components";

export const metadata = {
  title: "Our Services | FIGO CARE LTD - Healthcare Staffing Solutions UK",
  description: "FIGO CARE provides comprehensive healthcare staffing solutions for private hospitals, nursing homes, residential care, health centres, and mental health facilities across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Caring Hands, Trusted Support"
          subtitle="Supplying Compassionate Healthcare Staff When You Need Them Most"
          image="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop"
        />
        <WhereWeWork />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
