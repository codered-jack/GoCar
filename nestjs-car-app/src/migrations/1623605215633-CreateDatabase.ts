import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1623605215633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase("gocar",true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropDatabase("gocar",true);
    }

}
