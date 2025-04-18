
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const socialLinks = [
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/anshulba", 
    icon: <Linkedin className="h-5 w-5" />,
    color: "bg-[#0077B5]/10 text-[#0077B5]" 
  },
  { 
    name: "GitHub", 
    url: "https://github.com/Anshul-B-A", 
    icon: <Github className="h-5 w-5" />,
    color: "bg-[#333]/10 text-[#333] dark:text-white/90" 
  },
  { 
    name: "Twitter", 
    url: "https://twitter.com/Anshul_B_A", 
    icon: <Twitter className="h-5 w-5" />,
    color: "bg-[#1DA1F2]/10 text-[#1DA1F2]" 
  },
  { 
    name: "Dev.to", 
    url: "https://dev.to/anshul_65", 
    icon: <ExternalLink className="h-5 w-5" />,
    color: "bg-[#0A0A0A]/10 text-[#0A0A0A] dark:text-white/90" 
  },
  { 
    name: "Linktree", 
    url: "https://linktr.ee/anshulba", 
    icon: <ExternalLink className="h-5 w-5" />,
    color: "bg-[#43E660]/10 text-[#43E660]" 
  },
];

export const SocialLinks = () => {
  return (
    <div className="space-y-4">
      {socialLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
        >
          <div className={`p-3 rounded-full ${link.color}`}>
            {link.icon}
          </div>
          <span>{link.name}</span>
          <ExternalLink className="h-4 w-4 ml-auto text-foreground/50" />
        </a>
      ))}
    </div>
  );
};
