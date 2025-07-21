import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Karmugilan Kanagaraj
            </h3>
            <p className="text-muted-foreground">
              Lead DevOps Engineer specializing in cloud infrastructure, 
              CI/CD, and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-center">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col md:items-center space-y-2">
              <button 
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left md:text-center"
              >
                Technical Skills
              </button>
              <button 
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left md:text-center"
              >
                Experience
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left md:text-center"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="space-y-4 md:text-right">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex md:justify-end gap-4">
              <a 
                href="https://www.linkedin.com/in/karmugilan-kanagaraj-057623145"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:karmugilan@example.com"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="#"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToTop}
              className="mt-4 md:ml-auto"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Karmugilan Kanagaraj. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="text-muted-foreground">
              Built with React & TypeScript
            </span>
            <span className="text-muted-foreground">
              Deployed on Cloud
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;