import { Navbar, PageHero, ContactSection, Footer } from "../components";

export const metadata = {
  title: "Contact Us | FIGO CARE LTD - Speak With Our Team",
  description: "Reach out to Figo Care for healthcare workforce solutions or to discuss career opportunities. Our team is ready to assist you around the clock.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Contact Us"
          subtitle="We Are Here to Support Your Healthcare Staffing Needs"
          image="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
