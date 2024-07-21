import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsObject, IsUUID } from 'class-validator';
import { LocationEntity } from '@globals/models/location/location.entity';
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

    @OneToMany(() => LocationEntity, location => location.user)
    @IsObject({ each: true })
    addresses: Location[];

    @OneToOne(() => AvatarEntity, avatar => avatar.customer)
    @JoinColumn({ name: 'avatarId' })
    avatar: AvatarEntity;
}