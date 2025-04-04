import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const messageData = insertMessageSchema.parse(req.body);
      
      // Save the message to storage
      const message = await storage.createMessage(messageData);
      
      // Return the created message
      return res.status(201).json({
        success: true, 
        message: "Message sent successfully!",
        data: message
      });
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
