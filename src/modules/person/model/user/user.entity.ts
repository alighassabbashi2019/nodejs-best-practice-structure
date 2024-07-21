import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsEmail, IsEnum, IsString, Length, Matches } from 'class-validator';
import { GenderEnum } from '../../constants';
import { CurrencyEnum, UserRoleEnum } from '@globals/constants';

@Entity({ schema: 'person', name: 'Users' })
@Unique('email_unique', ['email'])
@Unique('phone_number_unique', ['phoneNumber'])
@Index(['phoneNumber'], { unique: true })
@Index(['email'], { unique: true })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsString()
    fullName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    phoneNumber: string;

    @Column()
    @IsString()
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters.' })
    @Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter.' })
    @Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter.' })
    @Matches(/(?=.*\d)/, { message: 'Password must contain at least one number.' })
    @Matches(/(?=.*[@$!%*?&])/, { message: 'Password must contain at least one special character.' })
    password: string;

    @Column({ type: 'enum', enum: GenderEnum })
    @IsEnum(GenderEnum)
    gender: GenderEnum;

    @Column({ type: 'enum', enum: CurrencyEnum })
    @IsEnum(CurrencyEnum)
    currency: CurrencyEnum;

    @Column({ type: 'enum', enum: UserRoleEnum })
    @IsEnum(UserRoleEnum)
    role: UserRoleEnum;

    @Column()
    @IsString()
    inviteLink: string;
}