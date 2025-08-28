import express from 'express';
import employeeRouter from "./employeeRouter";
import questionRouter from "./questionRouter";
import greetResponseRouter from './greetResponseRouter';

export const public_api = express.Router();

public_api.use("/employees", employeeRouter);
public_api.use("/questions", questionRouter);
public_api.use("/greet-responses", greetResponseRouter);