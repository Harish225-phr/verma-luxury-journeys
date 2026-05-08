import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Parallax } from "@/components/Parallax";
import { Gallery } from "@/components/Gallery";
import { Packages } from "@/components/Packages";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verma Tour & Travels — Luxury Himachal Travel Experiences" },
      {
        name: "description",
        content:
          "Premium tour & travel services across Himachal Pradesh. Luxury vehicles, expert chauffeurs, curated tour packages — Shimla, Manali, Dharamshala, Spiti & more.",
      },
      { property: "og:title", content: "Verma Tour & Travels — Luxury Himachal Journeys" },
      { property: "og:description", content: "Premium luxury travel across Himachal Pradesh." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Parallax />
        <Gallery />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
