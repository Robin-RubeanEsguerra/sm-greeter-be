import {Router} from 'express';
import { EmployeeController } from '../controller/employee.controller';

const employeeRouter = Router();

employeeRouter.get("/employee",EmployeeController.getAll);
employeeRouter.post("/employee",EmployeeController.createEmployee);

export default employeeRouter