import { Navbar, PageHero, ContactSection, Footer } from "../components";

export const metadata = {
  title: "Contact Us | FIGO CARE LTD - Get in Touch Today",
  description: "Contact FIGO CARE LTD for healthcare staffing solutions or career opportunities. Available 24/7 to meet your urgent and planned staffing needs across the UK.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Caring Hands, Trusted Support"
          subtitle="Supplying Compassionate Healthcare Staff When You Need Them Most"
          image="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
