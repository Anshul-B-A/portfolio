
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Award, Code, BookOpen, Globe, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: 1,
    title: "Hacktoberfest Contributor",
    date: "October 2022",
    description: "Successfully completed Hacktoberfest by contributing to multiple open-source projects, focusing on performance improvements and bug fixes.",
    icon: <Code className="h-5 w-5" />,
    category: "Open Source"
  },
  {
    id: 2,
    title: "Cloud Certification",
    date: "May 2022",
    description: "Earned certification in Google Cloud Platform fundamentals and services, demonstrating proficiency in cloud architecture and deployment.",
    icon: <Globe className="h-5 w-5" />,
    category: "Certification"
  },
  {
    id: 3,
    title: "Networking Course Completion",
    date: "February 2022",
    description: "Completed advanced networking courses covering protocols, security, and network architecture design principles.",
    icon: <BookOpen className="h-5 w-5" />,
    category: "Education"
  },
  {
    id: 4,
    title: "Hackathon Finalist",
    date: "November 2021",
    description: "Reached the finals of a regional hackathon with an innovative solution for environmental sustainability tracking.",
    icon: <Rocket className="h-5 w-5" />,
    category: "Competition"
  }
];

const categories = [
  { name: "All", value: "all" },
  { name: "Open Source", value: "Open Source" },
  { name: "Certification", value: "Certification" },
  { name: "Education", value: "Education" },
  { name: "Competition", value: "Competition" }
];

export default function AchievementsPage() {
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
            <Award className="h-8 w-8 text-primary hidden sm:inline" />
            My <span className="text-gradient">Achievements</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-foreground/80 mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my notable accomplishments, certifications, and recognition in the field of software engineering and open-source contribution.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <Badge 
                key={category.value} 
                variant={category.value === "all" ? "default" : "skill"}
                className="cursor-pointer"
              >
                {category.name}
              </Badge>
            ))}
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                          {achievement.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{achievement.title}</CardTitle>
                          <CardDescription>{achievement.date}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="glowing">{achievement.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-foreground/80 mb-6">
                Throughout my journey, I've developed proficiency in these technologies:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["C++", "Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "Git", "Hivebrite", "GCP", "JMeter"].map((tech) => (
                  <Badge key={tech} variant="glowing">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
