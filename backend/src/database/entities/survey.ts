import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { SurveyUser } from "./survey_user";

@Entity('surveys')
export class Survey {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @OneToOne( () => SurveyUser, surveyuser => surveyuser.id)
  surveyuser : SurveyUser
}