import { AppDataSource } from "../data-source";
import { Employee, GreetQuestion, GreetResponses } from "../entities";
import { EmployeeService } from "../service/employeeService";
import { GreetResponseService } from "../service/greetResponseService";
import { QuestionService } from "../service/questionService";


export const EmployeeRepository = new EmployeeService(
    AppDataSource.getRepository(Employee)
)
export const QuestionRepository = new QuestionService(
    AppDataSource.getRepository(GreetQuestion)
)
export const GreetResponsesRepository = new GreetResponseService(
    AppDataSource.getRepository(GreetResponses)
)