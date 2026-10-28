import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity('tutores')

export class Tutor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 150, nullable: false})
    Nome!: string;

    @Column()
    cpf!: number;

    @Column({length: 150})
    email!: string;

    @Column()
    telefone!: number;

    @Column({length: 255})
    endereco!: string;

    @Column({default: true})
    ativo!: boolean;

}