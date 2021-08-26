import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactoringSlugInArticle1629994472932 implements MigrationInterface {
    name = 'RefactoringSlugInArticle1629994472932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."articles" RENAME COLUMN "slag" TO "slug"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."articles" RENAME COLUMN "slug" TO "slag"`);
    }

}
