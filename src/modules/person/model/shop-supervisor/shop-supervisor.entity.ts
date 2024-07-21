import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsUUID } from 'class-validator';

@Entity({ schema: 'person', name: 'ShopSupervisors' })
export class ShopSupervisorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsUUID()
    userId: string;
}