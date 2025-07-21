import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Cloud, Server, Code } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-primary">
          <Cloud size={60} />
        </div>
        <div className="absolute top-40 right-32 text-accent">
          <Server size={45} />
        </div>
        <div className="absolute bottom-32 left-32 text-primary">
          <Code size={50} />
        </div>
        <div className="absolute bottom-20 right-20 text-accent">
          <Github size={40} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Karmugilan</span>
                <br />
                Kanagaraj
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Lead DevOps Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Expert in CI/CD, Cloud Platforms, Containerization, and Infrastructure as Code. 
                Building scalable, secure, and highly available cloud solutions.
              </p>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-3">
              {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://www.linkedin.com/in/karmugilan-kanagaraj-057623145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:karmugilan@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <img 
                  src={heroImage}
                  alt="Karmugilan Kanagaraj - Lead DevOps Engineer"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;