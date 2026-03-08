import {
  Navbar,
  Hero,
  WhoWeAre,
  WhereWeWork,
  WhoWeProvide,
  WhyTrustUs,
  JoinUs,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre variant="white" />
        <WhereWeWork variant="primary" />
        <WhoWeProvide variant="white" />
        <WhyTrustUs variant="primary" />
        <JoinUs variant="white" />
      </main>
      <Footer />
    </>
  );
}

