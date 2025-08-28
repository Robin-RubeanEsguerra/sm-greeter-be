import { Router } from "express";
import { QuestionController } from "../controller/questionController";

const questionRouter = Router();

questionRouter.get("/", QuestionController.getAll);
questionRouter.post("/", QuestionController.createQuestion);

export default questionRouter;
