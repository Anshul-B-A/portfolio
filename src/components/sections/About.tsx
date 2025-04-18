
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const technologies = [
  "C++", "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "Git", "Hivebrite", "GCP", "JMeter"
];

export default function About() {
  return (
    <section id="about-section" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-primary mx-auto rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-50" />
              
              {/* Placeholder for Ghibli-style portrait */}
              <div className="relative h-full w-full rounded-2xl glass-card flex items-center justify-center overflow-hidden border border-white/10">
                <div className="text-center p-6">
                  <div className="h-32 w-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Space for a Ghibli-style portrait
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">Software Engineer & Open Source Contributor</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm Anshul B A, a passionate software engineer from Bengaluru, India, with a drive for building 
              efficient, scalable, and elegant solutions to complex problems. I enjoy exploring new technologies 
              and contributing to open-source projects.
            </p>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h4>
              <div className="border-l-2 border-primary/30 pl-4 space-y-4">
                <div>
                  <h5 className="font-medium">Engineering Degree</h5>
                  <p className="text-sm text-foreground/70">Computer Science & Engineering</p>
                  <p className="text-xs text-foreground/60">2019 - 2023</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Experience
              </h4>
              <div className="border-l-2 border-primary/30 pl-4 space-y-4">
                <div>
                  <h5 className="font-medium">Open-source Contributor</h5>
                  <p className="text-sm text-foreground/70">
                    Active participation in Hacktoberfest and various open-source projects
                  </p>
                  <p className="text-xs text-foreground/60">2021 - Present</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="tech">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
