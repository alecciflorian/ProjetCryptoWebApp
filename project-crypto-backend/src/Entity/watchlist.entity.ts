import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import {UserEntity} from "./user.entity";

@Entity()
export class WatchlistEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 50})
    cryptoSymbol : string;
    @ManyToOne(() => UserEntity, (user) => user.watchlist)
    @JoinColumn({name: 'userId'})
    user: UserEntity
    @Column({ type: 'timestamp' })
    addedAt: Date;
}