import { Repository } from "typeorm";
import { GreetQuestion } from "../entities";

export class QuestionService {
      constructor(private readonly questionRepository: Repository<GreetQuestion>) {}

      async findAll() {
        const questions = await this.questionRepository.find();
        return questions;
      }

      async findByUuid(uuid: string) {
        const question = await this.questionRepository.findOne({ where: { greetQuestionUuid:uuid } });
        return question;
      }

      async create(questions: Partial<GreetQuestion>) {
         const question = this.questionRepository.create(questions);
         await this.questionRepository.save(question);
         return question;
       }
}