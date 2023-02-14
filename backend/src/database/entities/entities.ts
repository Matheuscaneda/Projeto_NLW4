import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;
}

@Entity()
export class Survey {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

}

@Entity()
export class SurveyUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  userId: string;

  @Column("uuid")
  surveyId: string;

  @Column()
  value: number;

  @Column()
  createdAt: Date;

}
