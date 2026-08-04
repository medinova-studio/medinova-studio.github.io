import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import Credentials from "@/components/Credentials";
import ContactSummary from "@/components/ContactSummary";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <Credentials />
      <ContactSummary />
      <Contact />
    </>
  );
}
