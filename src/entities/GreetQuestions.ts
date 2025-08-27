import { Entity,Column,Index, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("greet_questions")
export class GreetQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "uuid", generated: "uuid", name: "greet_question_uuid" })
  @Index()
  greetQuestionUuid: string;

  @Column()
  question: string;

  @CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;

}
