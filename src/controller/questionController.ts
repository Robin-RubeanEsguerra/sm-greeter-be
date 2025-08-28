import { Request, Response, NextFunction } from "express";
import { QuestionRepository } from "../repositories";

export class QuestionController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const questions = await QuestionRepository.findAll();
      res.json(questions);
    } catch (error) {
      next(error);
    }
  }

  static async createQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const question = await QuestionRepository.create(req.body);
      res.status(201).json(question);
    } catch (error) {
      next(error);
    }
  }
}
