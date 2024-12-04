import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import BlogPreview from "@/components/BlogPreview";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


export default function Home() {
  return (
    
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <CTA />
        <BlogPreview />
      </main>
  );
}
