import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SurveyUser } from "./survey_user";


@Entity('users')
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;
  
  @OneToOne( () => SurveyUser, surveyuser => surveyuser.id)
  surveyuser : SurveyUser
}