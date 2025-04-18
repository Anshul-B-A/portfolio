
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-foreground/70">Thank you for your message. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input 
            id="name" 
            placeholder="Your name" 
            required 
            className="bg-muted/50 border-white/10 focus:border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Your email" 
            required 
            className="bg-muted/50 border-white/10 focus:border-primary/50"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input 
          id="subject" 
          placeholder="Message subject" 
          required 
          className="bg-muted/50 border-white/10 focus:border-primary/50"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea 
          id="message" 
          placeholder="Your message" 
          rows={5} 
          required 
          className="bg-muted/50 border-white/10 focus:border-primary/50 resize-none"
        />
      </div>
      
      <Button type="submit" size="lg" className="w-full animated-border">
        Send Message
      </Button>
    </form>
  );
};
