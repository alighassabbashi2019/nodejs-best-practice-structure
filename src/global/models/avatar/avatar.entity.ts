import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEnum } from 'class-validator';
import { CustomerEntity } from '@person/model/customer/customer.entity';
import { FileEntity } from '../file/file.entity';
import { AvatarStatusEnum } from '../../constants';

@Entity({ schema: 'global', name: 'Avatars' })
export class AvatarEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: AvatarStatusEnum })
    @IsEnum(AvatarStatusEnum)
    status: AvatarStatusEnum;

    @OneToOne(() => FileEntity, file => file.avatar)
    picture: FileEntity;

    @OneToOne(() => CustomerEntity, customer => customer.avatar)
    customer: CustomerEntity;
}