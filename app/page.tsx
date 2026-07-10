import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import DuurzameTuin from "@/components/DuurzameTuin";
import Werkwijze from "@/components/Werkwijze";
import OverCorstiaan from "@/components/OverCorstiaan";
import WhyUs from "@/components/WhyUs";
import AreaServed from "@/components/AreaServed";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Projects />
        <DuurzameTuin />
        <Werkwijze />
        <OverCorstiaan />
        <WhyUs />
        <AreaServed />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
