
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Concurrent Proxy Server",
    description: "A high-performance proxy server built with Java that handles multiple client requests concurrently using threading techniques.",
    tags: ["Java", "Git", "JMeter", "Threading"],
    githubUrl: "#",
    liveUrl: null,
    image: "/placeholder.svg"
  },
  {
    title: "Combat Carbon",
    description: "An eco-friendly application with an integrated chatbot that helps users track and reduce their carbon footprint through personalized recommendations.",
    tags: ["Flask", "Python", "SQLite", "Chatbot"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/placeholder.svg"
  },
  {
    title: "Inventory Management System",
    description: "A desktop application for managing inventory with features like stock tracking, order management, and reporting.",
    tags: ["Java", "AWT", "Database"],
    githubUrl: "#",
    liveUrl: null,
    image: "/placeholder.svg"
  }
];

export default function Projects() {
  return (
    <section id="projects-section" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-primary mx-auto rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Here are some of the notable projects I've worked on throughout my journey as a developer.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="skill" size="sm">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" variant="ghost" className="gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" variant="ghost" className="gap-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
