import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsUUID } from 'class-validator';

@Entity({ schema: 'person', name: 'Admins' })
export class AdminEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsUUID()
    userId: string;
}