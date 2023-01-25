import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674668157653 implements MigrationInterface {
    name = 'default1674668157653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "props" text NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tranfer" ("id" character varying NOT NULL, CONSTRAINT "PK_8b3893324790caea438dee780d9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tranfer"`);
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
