import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaAuth1684205788042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // create schema auth if not exists
    await queryRunner.createSchema('auth', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // drop schema auth if exists
    await queryRunner.dropSchema('auth', true);
  }
}
