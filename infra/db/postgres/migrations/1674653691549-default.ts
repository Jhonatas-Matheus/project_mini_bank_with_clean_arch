import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674653691549 implements MigrationInterface {
    name = 'default1674653691549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transfers" ("id" character varying NOT NULL, CONSTRAINT "PK_f712e908b465e0085b4408cabc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" character varying NOT NULL, "ownerName" character varying NOT NULL, "balance" integer NOT NULL, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transfers_accounts_accounts" ADD CONSTRAINT "FK_51c58875dd02385c812733c398e" FOREIGN KEY ("transfersId") REFERENCES "transfers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "transfers_accounts_accounts" ADD CONSTRAINT "FK_9bff289e6a1617a6c55a43ae457" FOREIGN KEY ("accountsId") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transfers_accounts_accounts" DROP CONSTRAINT "FK_9bff289e6a1617a6c55a43ae457"`);
        await queryRunner.query(`ALTER TABLE "transfers_accounts_accounts" DROP CONSTRAINT "FK_51c58875dd02385c812733c398e"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "transfers"`);
    }

}
