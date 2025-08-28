import { Repository } from "typeorm";
import { GreetResponses } from "../entities";
import { NextFunction, Request, Response } from "express";
import { EmployeeRepository, QuestionRepository } from "../repositories";
import { error } from "console";
export class GreetResponseService {
  constructor(
    private readonly greetResponsesRepository: Repository<GreetResponses>
  ) {}

  async findAll() {
    return this.greetResponsesRepository.find();
  }

  async create(
    greetResponseData: Partial<GreetResponses>,
    questionUuid: string,
    employeeUuid: string
  ): Promise<{ success: boolean; data?: GreetResponses; error?: string }> {
    if (!questionUuid) {
      return { success: false, error: "Question UUID is required" };
    }

    const question = await QuestionRepository.findByUuid(questionUuid);

    if (!question) {
      return { success: false, error: "Question not found" };
    }

    if (!employeeUuid) {
      return { success: false, error: "Employee UUID is required" };
    }

    const employee = await EmployeeRepository.findByUuid(employeeUuid);

    if (!employee) {
      return { success: false, error: "Employee not found" };
    }

    const greetResponse = this.greetResponsesRepository.create({
      ...greetResponseData,
      question: question,
      employee: employee,
      answeredOn: new Date(),
    });

    const savedResponse = await this.greetResponsesRepository.save(
      greetResponse
    );

    return {
      success: true,
      data: savedResponse,
    };
  }

  async findByDate(date: Date) {
    return this.greetResponsesRepository.find({
      where: {
        answeredOn: date,
      },
    });
  }
}
