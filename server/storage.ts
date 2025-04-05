import {
  type User,
  type InsertUser,
  type Message,
  type InsertMessage,
} from "@shared/schema";
import { Message as MongoMessage } from "./mongodb";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<Message>;
}

// In-memory fallback storage
export class MemoryStorage implements IStorage {
  private users: User[] = [];
  private messages: Message[] = [];
  private userId = 1;
  private messageId = 1;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
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
        message: insertMessage.message,
      });
      await mongoMessage.save();
    } catch (error) {
      console.log("Failed to save to MongoDB, using memory storage only");
    }

    return message;
  }
}

// Exporting the current storage implementation
export const storage = new MemoryStorage();
