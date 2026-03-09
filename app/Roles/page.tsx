import { Navbar, PageHero, WhoWeProvide, JoinUs, Footer } from "../components";

export const metadata = {
  title: "Healthcare Careers | FIGO CARE LTD - Explore Opportunities",
  description: "Find fulfilling healthcare roles with Figo Care. We place registered nurses, healthcare assistants, support workers, and allied health professionals in positions across the UK.",
};

export default function RolesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Healthcare Careers"
          subtitle="Your Next Healthcare Career Starts Here"
          image="/images/careers-hero.jpg"
        />
        <WhoWeProvide variant="white" />
        <JoinUs variant="primary" />
      </main>
      <Footer />
    </>
  );
}
