import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsUUID } from 'class-validator';

@Entity({ schema: 'person', name: 'ShopOwners' })
export class ShopOwnerEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsUUID()
    userId: string;
}