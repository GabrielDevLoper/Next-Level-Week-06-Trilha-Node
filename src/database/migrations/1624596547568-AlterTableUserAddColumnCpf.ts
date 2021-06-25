import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableUserAddColumnCpf1624596547568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users" ,new TableColumn({
            name: "cpf",
            type: "varchar",
            isNullable: true,

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "cpf");
    }

}
