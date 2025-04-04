import type { Express } from "express";
import { createServer, type Server } from "http";
import { Message } from "./mongodb";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const messageData = insertMessageSchema.parse(req.body);
      
      try {
        // First try to save to MongoDB
        const newMessage = new Message({
          name: messageData.name,
          email: messageData.email,
          subject: messageData.subject,
          message: messageData.message
        });
        
        const savedMessage = await newMessage.save();
        
        // Return the created message
        return res.status(201).json({
          success: true, 
          message: "Message sent successfully!",
          data: savedMessage
        });
      } catch (mongoError) {
        console.log("MongoDB save failed, using storage interface as fallback");
        
        // If MongoDB fails, use the storage interface
        const savedMessage = await storage.createMessage({
          name: messageData.name,
          email: messageData.email,
          subject: messageData.subject,
          message: messageData.message
        });
        
        return res.status(201).json({
          success: true, 
          message: "Message sent successfully!",
          data: savedMessage
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: validationError.message 
        });
      }
      
      console.error("Error saving message:", error);
      return res.status(500).json({ 
        success: false,
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
