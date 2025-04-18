
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Concurrent Proxy Server",
    description: "A high-performance proxy server built with Java that handles multiple client requests concurrently using threading techniques. This server implements caching mechanisms to improve response times and thread pooling for efficient resource utilization.",
    tags: ["Java", "Git", "JMeter", "Threading"],
    githubUrl: "#",
    liveUrl: null,
    image: "/placeholder.svg",
    features: [
      "Multi-threading for concurrent request handling",
      "Caching mechanism for improved performance",
      "Load testing with JMeter",
      "Connection pooling and resource management"
    ]
  },
  {
    title: "Combat Carbon",
    description: "An eco-friendly application with an integrated chatbot that helps users track and reduce their carbon footprint through personalized recommendations. The app analyzes user behavior and suggests sustainable alternatives.",
    tags: ["Flask", "Python", "SQLite", "Chatbot"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/placeholder.svg",
    features: [
      "AI-powered chatbot for personalized recommendations",
      "Carbon footprint calculation based on user activities",
      "SQLite database for user data storage",
      "Interactive dashboard for tracking progress"
    ]
  },
  {
    title: "Inventory Management System",
    description: "A desktop application for managing inventory with features like stock tracking, order management, and reporting. Designed to help small businesses track their inventory efficiently with minimal overhead.",
    tags: ["Java", "AWT", "Database"],
    githubUrl: "#",
    liveUrl: null,
    image: "/placeholder.svg",
    features: [
      "Real-time inventory tracking",
      "Order processing and management",
      "Reporting and analytics",
      "User access control and permissions"
    ]
  }
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold font-display mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-foreground/80 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here's a showcase of my notable projects that demonstrate my technical skills and problem-solving abilities. Each project represents a unique challenge and solution.
        </motion.p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent lg:hidden" />
                </div>
                <div className="p-6 lg:py-10 lg:pr-10">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="skill">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase flex items-center gap-2 mb-3">
                      <Code className="h-4 w-4 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm" variant="default" className="gap-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="gap-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
