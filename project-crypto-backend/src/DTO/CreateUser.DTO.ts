import { IsEmail, IsString, IsEnum, IsDateString, MinLength } from 'class-validator'
import { Sexe } from '../Entity/user.entity'
export class CreateUserDTO {
    @IsEmail()
    email : string;
    @IsString()
    @MinLength(8)
    password : string;
    @IsString()
    firstName : string;
    name : string;
    @IsString()
    address : string;
    @IsEnum(Sexe)
    sexe : Sexe;
    @IsDateString()
    dateOfBirth : string;
    @IsString()
    nationality : string;
}