import {Router} from 'express';
import { EmployeeController } from '../controller/employeeController';
import { validateInput } from '../middleware/validateInput';

const employeeRouter = Router();

employeeRouter.get("/",EmployeeController.getAll);
employeeRouter.post("/",validateInput, EmployeeController.createEmployee);
employeeRouter.get("/:uuid",EmployeeController.getOne);

export default employeeRouter