import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity("especies")

export class Especie {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column ({length: 150})
    nomeP!: string;

    @Column ({length: 200})
    nomeC!: string;

    @Column ({length: 255})
    desc!: string;

    @Column ({default: true})
    domestico!: boolean;

    @Column ({default: true})
    ativo!: boolean;
}