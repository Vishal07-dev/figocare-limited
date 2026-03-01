import {
  Navbar,
  Hero,
  WhoWeAre,
  WhereWeWork,
  WhoWeProvide,
  WhyTrustUs,
  JoinUs,
  ContactSection,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhereWeWork />
        <WhoWeProvide />
        <WhyTrustUs />
        <JoinUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

