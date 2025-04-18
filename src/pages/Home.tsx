
import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Projects />
      
      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Want to see more?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Check out my blog for tech insights, explore my achievements, or get in touch to discuss a project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <Link to="/blog">
                Visit Blog
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
