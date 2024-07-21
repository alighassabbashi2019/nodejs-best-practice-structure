import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsObject, IsString, IsUUID } from 'class-validator';
import { UserEntity } from '@person/model/user/user.entity';
import { ShopEntity } from '@shop/model/shop/shop.entity';

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

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'refId' })
    @IsObject()
    user: UserEntity;

    @OneToOne(() => ShopEntity, shop => shop.address)
    @JoinColumn({ name: 'refId' })
    @IsObject()
    shop: UserEntity;
}