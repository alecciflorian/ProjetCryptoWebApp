
import { IsEmail, IsString, IsEnum, IsDateString, MinLength, IsOptional } from 'class-validator'
import { Sexe } from '../Entity/user.entity'
export class UpdateDTO {
    @IsEmail()
    @IsOptional()
    email ?: string;
    @IsString()
    @MinLength(8)
    @IsOptional()
    password ?: string;
    @IsString()
    @IsOptional()
    firstName ?: string;
    name ?: string;
    @IsString()
    @IsOptional()
    address ?: string;
    @IsEnum(Sexe)
    @IsOptional()
    sexe ?: Sexe;
    @IsDateString()
    @IsOptional()
    dateOfBirth ?: string;
    @IsString()
    @IsOptional()
    nationality ?: string;
}