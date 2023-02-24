import { User } from './users';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Survey } from './survey';

@Entity('survey_users')

export class SurveyUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  value: number;

  @Column()
  created_at: Date;

  @OneToOne( () => User, user => user.id)
  @JoinColumn({name: 'user_id'})

  @OneToOne( () => Survey, survey => survey.id)
  @JoinColumn({name: 'survey_id'})
  user: User
  survey: Survey
}