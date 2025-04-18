
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Essential Data Structures for Coding Interviews",
    excerpt: "A comprehensive guide to the most important data structures you need to master for technical interviews.",
    date: "April 10, 2023",
    readTime: "8 min read",
    category: "DSA",
    tags: ["Algorithms", "Data Structures", "Interviews"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "My Experience at the Recent Hackathon",
    excerpt: "Insights and lessons learned from participating in a 48-hour hackathon and building a solution from scratch.",
    date: "February 22, 2023",
    readTime: "5 min read",
    category: "Hackathon",
    tags: ["Teamwork", "Rapid Development", "Problem Solving"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Understanding Java Threading Models",
    excerpt: "Deep dive into how threading works in Java and best practices for implementing concurrent applications.",
    date: "January 15, 2023",
    readTime: "10 min read",
    category: "Java",
    tags: ["Threading", "Concurrency", "Performance"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Getting Started with Open Source Contributions",
    excerpt: "A beginner's guide to making your first meaningful contribution to open source projects.",
    date: "December 5, 2022",
    readTime: "6 min read",
    category: "Open Source",
    tags: ["Git", "Collaboration", "Community"],
    image: "/placeholder.svg"
  }
];

export default function BlogPage() {
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
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Blog</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-foreground/80 mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I write about data structures and algorithms, hackathon experiences, and various technical topics. Here you'll find insights, tutorials, and stories from my journey as a software engineer.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <Badge variant="glowing" className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="skill" size="sm">{tag}</Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                    Read More
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
