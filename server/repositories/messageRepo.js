import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";

class MessageRepository {
  constructor() {
    this.prisma = new PrismaClient(); // Initialize Prisma client
  }

  async createSubmission({ email, name, subject, message }) {
    const createdAt = DateTime.now().setZone("Asia/Damascus").toISO();
    try {
      const submission = await this.prisma.submission.create({
        data: {
          email,
          name,
          subject,
          message,
          created_at: new Date(createdAt),
        },
      });
      console.log("Submission saved:", submission);
      return submission;
    } catch (error) {
      console.error("Error saving submission:", error);
      throw error;
    }
  }

  async getSubmissions() {
    try {
      const submissions = await this.prisma.submission.findMany();
      console.log("Submissions:", submissions);
      return submissions;
    } catch (error) {
      console.error("Error fetching submissions:", error);
      throw error;
    }
  }

  async getSubmissionById(id) {
    try {
      const submission = await this.prisma.submission.findUnique({
        where: { id },
      });
      console.log("Submission:", submission);
      return submission;
    } catch (error) {
      console.error("Error fetching submission by ID:", error);
      throw error;
    }
  }
}

export default new MessageRepository();
