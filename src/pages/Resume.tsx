
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ResumePage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-display mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FileText className="h-8 w-8 text-primary hidden sm:inline" />
            My <span className="text-gradient">Resume</span>
          </motion.h1>
          
          <motion.div 
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/80 mb-6">
              Here you can view and download my resume which outlines my education, technical skills, work experience, and achievements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" className="animated-border gap-2">
                <Download className="h-5 w-5" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link to="/about">
                  <Eye className="h-5 w-5" />
                  View Full Profile
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="aspect-[8.5/11] w-full bg-white/5 flex items-center justify-center">
              <div className="p-4 md:p-8 lg:p-16 w-full h-full overflow-auto">
                {/* Resume Preview Content */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold">Anshul B A</h2>
                  <p className="text-foreground/80">Software Engineer & Open Source Contributor</p>
                  <p className="text-sm text-foreground/60 mt-1">Bengaluru, India</p>
                </div>

                <div className="space-y-8">
                  {/* Contact Information */}
                  <div className="text-center space-y-1 text-sm">
                    <p>
                      <a href="mailto:example@email.com" className="text-primary hover:underline">example@email.com</a>
                    </p>
                    <p>
                      <a href="https://github.com/Anshul-B-A" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/Anshul-B-A</a>
                    </p>
                    <p>
                      <a href="https://linkedin.com/in/anshulba" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/anshulba</a>
                    </p>
                  </div>

                  {/* Summary */}
                  <div>
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-1 mb-2">Professional Summary</h3>
                    <p className="text-sm text-foreground/80">
                      Software Engineer with expertise in developing robust applications and contributing to open-source projects. 
                      Strong problem-solving skills and experience with various programming languages and frameworks.
                      Passionate about creating efficient, scalable solutions and continuously expanding technical knowledge.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-1 mb-2">Education</h3>
                    <div className="mb-2">
                      <h4 className="font-semibold">Bachelor of Engineering in Computer Science</h4>
                      <p className="text-sm text-foreground/80">University Name</p>
                      <p className="text-xs text-foreground/60">2019 - 2023</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-1 mb-2">Technical Skills</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Languages:</p>
                        <p className="text-foreground/80">C++, Java, Python, SQL, HTML, CSS, JavaScript</p>
                      </div>
                      <div>
                        <p className="font-medium">Tools & Technologies:</p>
                        <p className="text-foreground/80">Git, Hivebrite, GCP, JMeter</p>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-1 mb-2">Projects</h3>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold">Concurrent Proxy Server</h4>
                      <p className="text-xs text-primary mb-1">Java, Git, JMeter</p>
                      <p className="text-sm text-foreground/80">A high-performance proxy server that handles multiple client requests concurrently using threading techniques.</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold">Combat Carbon</h4>
                      <p className="text-xs text-primary mb-1">Flask, Python, SQLite, Chatbot</p>
                      <p className="text-sm text-foreground/80">An eco-friendly application with integrated chatbot that helps users track and reduce their carbon footprint.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Inventory Management System</h4>
                      <p className="text-xs text-primary mb-1">Java, AWT</p>
                      <p className="text-sm text-foreground/80">A desktop application for managing inventory with features like stock tracking and order management.</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-1 mb-2">Achievements</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
                      <li>Hacktoberfest Open Source Contributor</li>
                      <li>Completed advanced networking courses</li>
                      <li>Earned cloud certifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Watermark/Overlay for visual effect */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
              <div className="text-9xl font-bold rotate-45 text-primary">RESUME</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
