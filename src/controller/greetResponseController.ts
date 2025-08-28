import { Response, Request, NextFunction } from "express";
import { GreetResponsesRepository } from "../repositories";

export class GreetResponseController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const greetResponses = await GreetResponsesRepository.findAll();
      res.json(greetResponses);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const greetResponseData = req.body;
      const questionUuid = req.params.questionUuid;
      const employeeUuid = req.params.employeeUuid;
      const greetResponse = await GreetResponsesRepository.create(
        greetResponseData,
        questionUuid,
        employeeUuid
      );

      if (!greetResponse.success) {
        return res.status(400).json({ error: greetResponse.error });
      }
      res.status(201).json(greetResponse);
    } catch (error) {
      next(error);
    }
  }

  static async getByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const date = new Date(req.body.date);
      const greetResponses = await GreetResponsesRepository.findByDate(date);
      res.json(greetResponses);
    } catch (error) {
      next(error);
    }
  }
}
