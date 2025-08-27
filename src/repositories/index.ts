import { AppDataSource } from "../data-source";
import { Employee } from "../entities";
import { EmployeeService } from "../service/employeeService";


export const EmployeeRepository = new EmployeeService(
    AppDataSource.getRepository(Employee)
)