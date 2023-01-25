import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674673420501 implements MigrationInterface {
    name = 'default1674673420501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "props"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "ownerName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "account" ADD "balance" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "ownerName"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "props" text NOT NULL`);
    }

}
