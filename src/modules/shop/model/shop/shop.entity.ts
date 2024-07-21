import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LocationEntity } from '@globals/models/location/location.entity';

@Entity({ schema: 'shop', name: 'Shops' })
export class ShopEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => LocationEntity, location => location.shop)
    address: LocationEntity;
}