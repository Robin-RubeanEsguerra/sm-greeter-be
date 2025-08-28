import {Router} from 'express';
import { EmployeeController } from '../controller/employeeController';
import { validateInput } from '../middleware/validateInput';
import { GreetResponseController } from '../controller/greetResponseController';

const greetResponseRouter = Router();

greetResponseRouter.get("/",GreetResponseController.getAll);
greetResponseRouter.get("/date",GreetResponseController.getByDate);
greetResponseRouter.post("/:questionUuid/employee/:employeeUuid",GreetResponseController.create);


export default greetResponseRouter