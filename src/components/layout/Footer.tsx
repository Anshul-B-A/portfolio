
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/anshulba", 
      icon: <Linkedin className="h-5 w-5" /> 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Anshul-B-A", 
      icon: <Github className="h-5 w-5" /> 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/Anshul_B_A", 
      icon: <Twitter className="h-5 w-5" /> 
    },
    { 
      name: "Dev.to", 
      url: "https://dev.to/anshul_65", 
      icon: <ExternalLink className="h-5 w-5" /> 
    },
    { 
      name: "Linktree", 
      url: "https://linktr.ee/anshulba", 
      icon: <ExternalLink className="h-5 w-5" /> 
    },
  ];

  return (
    <footer className="mt-auto py-10 border-t border-border/30 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold font-display">
              <span className="text-gradient">Anshul B A</span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              Software Engineer & Open Source Contributor based in Bengaluru, India.
              Passionate about building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-foreground/60">
            &copy; {currentYear} Anshul B A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

