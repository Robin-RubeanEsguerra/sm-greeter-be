import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Employee } from "./Employee";
import { GreetQuestion } from "./GreetQuestions";

@Entity("greet_responses")
export class GreetResponses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "uuid", generated: "uuid", name: "greet_responses_uuid" })
  @Index()
  greetResponsesUuid: string;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: "employee_id" })
  employee: Employee;

@ManyToOne(() => GreetQuestion)
  @JoinColumn({ name: "question_id" })
  question: GreetQuestion;

  @Column()
  answer: boolean;

  @Column({ type: "date", name: "answered_on" })
  answeredOn: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
