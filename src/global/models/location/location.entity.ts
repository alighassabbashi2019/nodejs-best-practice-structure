import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEnum, IsNumber, IsString, IsUUID } from 'class-validator';
import { LocationRefTypeEnum } from '@globals/constants';

@Entity({ schema: 'global', name: 'Locations' })
export class LocationEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsNumber()
    latitude: number;

    @Column()
    @IsNumber()
    longitude: number;

    @Column()
    @IsString()
    address: string;

    @Column()
    @IsUUID()
    refId: string;

    @Column({ type: 'enum', enum: LocationRefTypeEnum })
    @IsEnum(LocationRefTypeEnum)
    refType: LocationRefTypeEnum;
}