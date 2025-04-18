
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const technologies = [
  "C++", "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "Git", "Hivebrite", "GCP", "JMeter"
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h1>

          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Introduction */}
            <section className="space-y-4">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                    I'm Anshul B A, a software engineer and open-source enthusiast from Bengaluru, India. I have a passion for developing robust applications and contributing to the tech community.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    My journey in technology has been driven by curiosity and a desire to solve meaningful problems. I enjoy diving deep into complex challenges and emerging with elegant solutions.
                  </p>
                </div>
                
                {/* Placeholder for Ghibli-style portrait */}
                <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden glass-card border border-white/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="h-24 w-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Space for a Ghibli-style portrait
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h3 className="font-semibold text-xl">Computer Science & Engineering</h3>
                  <p className="text-foreground/70">Bachelor's Degree</p>
                  <p className="text-sm text-foreground/60 mt-1">2019 - 2023</p>
                  <p className="mt-4 text-foreground/80">
                    Studied core computer science concepts including algorithms, data structures, operating systems, and software engineering principles. Participated in various hackathons and technical competitions.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Experience
              </h2>
              <div className="space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h3 className="font-semibold text-xl">Open-source Contributor</h3>
                  <p className="text-foreground/70">Various Projects</p>
                  <p className="text-sm text-foreground/60 mt-1">2021 - Present</p>
                  <p className="mt-4 text-foreground/80">
                    Actively contributed to open-source projects, particularly during Hacktoberfest. Developed and maintained various components, fixed bugs, and collaborated with developers globally.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h3 className="font-semibold text-xl">Hackathon Participant</h3>
                  <p className="text-foreground/70">Multiple Competitions</p>
                  <p className="text-sm text-foreground/60 mt-1">2020 - Present</p>
                  <p className="mt-4 text-foreground/80">
                    Participated in various hackathons, developing solutions under tight deadlines and collaborating with diverse teams. Focused on creating innovative applications that address real-world problems.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills & Technologies */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Skills & Technologies
              </h2>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="tech">{tech}</Badge>
                  ))}
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="skill">Problem Solving</Badge>
                  <Badge variant="skill">Team Collaboration</Badge>
                  <Badge variant="skill">Time Management</Badge>
                  <Badge variant="skill">Communication</Badge>
                  <Badge variant="skill">Adaptability</Badge>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h2>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Networking Courses</h3>
                    <p className="text-sm text-foreground/70">Advanced networking principles and protocols</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cloud Certifications</h3>
                    <p className="text-sm text-foreground/70">Google Cloud Platform fundamentals and services</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
