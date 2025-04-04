import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-14">
            <motion.span 
              className="text-primary font-medium px-4 py-2 rounded-full border border-primary/20 inline-flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Get in Touch
            </motion.span>
            <motion.h2 
              className="font-poppins font-bold text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact Me
            </motion.h2>
          </div>
        </div>
        
        <div className="row">
          <motion.div 
            className="col-lg-5 mb-10 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="font-poppins font-semibold text-2xl mb-6">Let's Talk About Your Project</h3>
              <p className="text-gray-600 mb-8">
                Have a project in mind? Let's discuss how I can help you build something amazing. Fill out the form, and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <i className="bi bi-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <i className="bi bi-telephone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <i className="bi bi-geo-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect with me:</h4>
                <div className="flex gap-4">
                  <a href={personalInfo.socialLinks.github} className="bg-white p-3 rounded-lg shadow-sm text-dark hover:text-primary transition-colors">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href={personalInfo.socialLinks.linkedin} className="bg-white p-3 rounded-lg shadow-sm text-dark hover:text-primary transition-colors">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href={personalInfo.socialLinks.twitter} className="bg-white p-3 rounded-lg shadow-sm text-dark hover:text-primary transition-colors">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href={personalInfo.socialLinks.instagram} className="bg-white p-3 rounded-lg shadow-sm text-dark hover:text-primary transition-colors">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all" 
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all" 
                    placeholder="Tell me about your project..." 
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all flex justify-center items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="bi bi-send ml-2"></i>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
