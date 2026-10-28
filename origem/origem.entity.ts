import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('origens')

export class Origem {
    @PrimaryGeneratedColumn ()
    id!: number;

    @Column ({length: 100})
    Cont!: string;

    @Column ({length: 70})
    País!: string;

    @Column ({length: 100})
    Regiao!: string;

    @Column ({length: 255})
    desc!: string;

    @Column ({default: true})
    ativo!: boolean;

}