import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefaultDatesUser1684463988310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // set created_at and updated_at to default value in auth.users
    await queryRunner.query(
      `ALTER TABLE "auth"."user" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."user" ALTER COLUMN "updated_at" SET DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // remove default value from created_at and updated_at in auth.users
    await queryRunner.query(
      `ALTER TABLE "auth"."user" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "auth"."user" ALTER COLUMN "updated_at" DROP DEFAULT`,
    );
  }
}
