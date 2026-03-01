import { Navbar, PageHero, WhoWeProvide, JoinUs, ContactSection, Footer } from "../components";

export const metadata = {
  title: "Healthcare Roles & Careers | FIGO CARE LTD - Join Our Team",
  description: "Explore healthcare career opportunities with FIGO CARE LTD. We recruit registered nurses, healthcare assistants, support workers, and allied health professionals across the UK.",
};

export default function RolesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Caring Hands, Trusted Support"
          subtitle="Supplying Compassionate Healthcare Staff When You Need Them Most"
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
        />
        <WhoWeProvide />
        <JoinUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
