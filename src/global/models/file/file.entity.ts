import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsString, IsUUID } from 'class-validator';
import { AvatarEntity } from '../avatar/avatar.entity';

@Entity({ schema: 'global', name: 'Files' })
export class FileEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsString()
    path: string;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    downloadUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @IsUUID()
    refId: string;

    @OneToOne(() => AvatarEntity, avatar => avatar.picture)
    @JoinColumn({ name: 'refId' })
    avatar: AvatarEntity;
}