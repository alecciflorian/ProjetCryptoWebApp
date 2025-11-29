import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import {WatchlistEntity} from "./watchlist.entity";

export enum Sexe  {
   'Male' = 'M',
   'Female' = 'Female',
}

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id : number;
    @Column({type : 'varchar', length: 255, unique: true})
    email : string;
    @Column({type : 'varchar', length: 255})
    password : string;
    @Column({ type: 'varchar', length: 255 })
    firstName: string;
    name : string;
    @Column({ type: 'number' })
    age : number;
    @Column({ type : 'enum', enum : Sexe })
    sexe : Sexe
    @Column({ type : 'text'  })
    address : Text;
    @Column({type : 'varchar', length: 255 })
    nationality : string;
    @Column({type : 'varchar', length: 50 })
    dateOfBirth : string;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => WatchlistEntity, (watchlist) => watchlist.user)
    watchlist : WatchlistEntity[];
}
