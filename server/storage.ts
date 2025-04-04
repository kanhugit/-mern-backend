import { type User, type InsertUser, type Message, type InsertMessage, users, messages } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { Message as MongoMessage } from "./mongodb";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<Message>;
}

// PostgreSQL implementation of the storage interface
export class PostgresStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result.length > 0 ? result[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result.length > 0 ? result[0] : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const result = await db.insert(messages).values(insertMessage).returning();
    return result[0];
  }
}

// In-memory fallback storage
export class MemoryStorage implements IStorage {
  private users: User[] = [];
  private messages: Message[] = [];
  private userId = 1;
  private messageId = 1;
  
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const user = { ...insertUser, id: this.userId++ } as User;
    this.users.push(user);
    return user;
  }
  
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message = { ...insertMessage, id: this.messageId++ } as Message;
    this.messages.push(message);
    
    // Also try to save to MongoDB if available
    try {
      const mongoMessage = new MongoMessage({
        name: insertMessage.name,
        email: insertMessage.email,
        subject: insertMessage.subject,
        message: insertMessage.message
      });
      await mongoMessage.save();
    } catch (error) {
      console.log('Failed to save to MongoDB, using memory storage only');
    }
    
    return message;
  }
}

// Use in-memory storage as it's more reliable for this portfolio demo
export const storage = new MemoryStorage();
