import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsUUID } from 'class-validator';
import { AvatarEntity } from '@globals/models/avatar/avatar.entity';

@Entity({ schema: 'person', name: 'Customers' })
export class CustomerEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsUUID()
    userId: string;

    @Column()
    @IsUUID()
    avatarId: string;

    @OneToOne(() => AvatarEntity, avatar => avatar.customer)
    @JoinColumn({ name: 'avatarId' })
    avatar: AvatarEntity;
}