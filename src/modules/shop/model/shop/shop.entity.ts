import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'shop', name: 'Shops' })
export class ShopEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
}