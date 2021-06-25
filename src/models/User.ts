import {Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, BeforeInsert} from "typeorm";
import {v4 as uuid} from "uuid";
import {hash} from "bcryptjs";
@Entity("users")
export class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    password: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    async passwordHash() {
        const passwordHash = await hash(this.password, 8);
        this.password = passwordHash;
    }

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }


}
