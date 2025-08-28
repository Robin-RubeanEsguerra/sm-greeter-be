import { Request, Response, NextFunction } from "express";
import { EmployeeRepository } from "../repositories";

export class EmployeeController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await EmployeeRepository.findAll();
      res.status(200).json(data); 
    } catch (error) {
      next(error);
    }
  }

  static async createEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      const employeeData = req.body;
      const newEmployee = await EmployeeRepository.create(employeeData);
      res.status(201).json(newEmployee);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { uuid } = req.params;
      const employee = await EmployeeRepository.findOne(uuid);
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.status(200).json(employee);
    } catch (error) {
      next(error);
    }
  }
}
