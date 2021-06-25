import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableCompliments1624600912459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"compliments",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "user_sender",
                    type: "varchar",
                },
                {
                    name: "user_receiver",
                    type: "varchar",
                },
                {
                    name: "id_tag",
                    type: "varchar",
                },
                {
                    name: "message",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
            ],
            foreignKeys: [
                {
                    name: "FK_USER_COMPLIMENTS_SEND",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    name: "FK_USER_COMPLIMENTS_RECEIVER",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_receiver"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    name: "FK_TAG_COMLIMENTS",
                    referencedTableName: "tags",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_tag"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
