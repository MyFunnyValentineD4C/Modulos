import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity('raças')

export class Raça {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column ({length: 100})
    nome!: string;

    @Column ({length: 50})
    porte!: string;

    @Column ({length: 255})
    desc!: string;

    @Column ()
    expecVida!: number;

    @Column ({default: true})
    ativo!: boolean;

}