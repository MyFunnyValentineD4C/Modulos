import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity ('pets')

export class Pet {
    @PrimaryGeneratedColumn ()
    id!: number;

    @Column ({length: 150, nullable: false})
    nome!: string;

    @Column ()
    data!: Date;

    @Column ({length: 1})
    sexo!: string;

    @Column ()
    peso!: number;

    @Column ({length: 15})
    cor!: string;

    @Column ({default: true})
    castrado!: boolean;

    @Column ({default: true})
    ativo!: boolean;
}