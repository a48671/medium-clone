import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateArticleEntity1629902756368 implements MigrationInterface {
    name = 'UpdateArticleEntity1629902756368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "tags" TO "tagList"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "tagList" TO "tags"`);
    }

}
