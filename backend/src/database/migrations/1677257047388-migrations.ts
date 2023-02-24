import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1677257047388 implements MigrationInterface {
    name = 'migrations1677257047388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "surveys" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_1b5e3d4aaeb2321ffa98498c971" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "survey_id" uuid, CONSTRAINT "REL_23284be5a955ca5eafd7dbafc8" UNIQUE ("survey_id"), CONSTRAINT "PK_a1909625c0a449a634acdceab87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "survey_users" ADD CONSTRAINT "FK_23284be5a955ca5eafd7dbafc87" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "survey_users" DROP CONSTRAINT "FK_23284be5a955ca5eafd7dbafc87"`);
        await queryRunner.query(`DROP TABLE "survey_users"`);
        await queryRunner.query(`DROP TABLE "surveys"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
