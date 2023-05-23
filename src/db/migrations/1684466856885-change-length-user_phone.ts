import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeLengthUserPhone1684466856885 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // change length of auth.user.phone to 100
    await queryRunner.query(
      `ALTER TABLE "auth"."user" ALTER COLUMN "phone" TYPE varchar(100)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // change length of auth.user.phone to 20
    await queryRunner.query(
      `ALTER TABLE "auth"."user" ALTER COLUMN "phone" TYPE varchar(20)`,
    );
  }
}
