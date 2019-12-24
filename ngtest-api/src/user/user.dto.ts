import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';

/**
 * RequestUserDto
 * @class
 */
export class RequestUserDto {
    
    @ApiProperty()
    @IsString({message: 'INVALID.NAME'})
    readonly name: string;

    @ApiProperty()
    @IsString({message: 'INVALID.SURNAME'})
    readonly surname: string;

    @ApiProperty()
    @IsEmail({}, { message: 'INVALID.EMAIL' })
    @IsOptional()
    readonly email?: string;

    @ApiProperty()
    @IsString({ message: 'INVALID.DATE_BORN' })
    @IsOptional()
    readonly dateBorn?: string;

    @ApiProperty()
    @IsString({ message: 'INVALID.ADDRESS' })
    @IsOptional()
    readonly address?: string;

    @ApiProperty()
    @IsString({ message: 'INVALID.CITY' })
    @IsOptional()
    readonly city?: string;

    @ApiProperty()
    @IsString({ message: 'INVALID.COUNTRY' })
    @IsOptional()
    readonly country?: string;

    @ApiProperty()
    @IsString({ message: 'INVALID.IMAGE_URL' })
    @IsOptional()
    readonly imageUrl?: string

    @ApiProperty()
    @IsString({ message: 'INVALID.USERNAME' })
    @IsOptional()
    readonly username?: string

    @ApiProperty()
    @IsString({ message: 'INVALID.PASSWORD' })
    @IsOptional()
    readonly password?: string    
}

/**
 * DetailUserDto
 * @class
 */
export class DetailUserDto {

    @ApiProperty()
    @IsInt({message: 'INVALID.NAME'})
    readonly id: number;
    
    @ApiProperty()
    @IsString({message: 'INVALID.NAME'})
    readonly name?: string;

    @ApiProperty()
    @IsString({message: 'INVALID.SURNAME'})
    readonly surname?: string;

    @ApiProperty()
    @IsEmail({}, { message: 'INVALID.EMAIL' })
    readonly email?: string;

    @ApiProperty()
    @IsString()
    readonly dateBorn?: string;

    @ApiProperty()
    @IsString()
    readonly address?: string;

    @ApiProperty()
    @IsString()
    readonly city?: string;

    @ApiProperty()
    @IsString()
    readonly country?: string;

    @ApiProperty()
    @IsString()
    readonly imageUrl?: string
}

/**
 * ResponseUserListDto
 * @class 
 */
export class ResponseUserListDto {
    @ApiProperty()
    readonly id?: number;

    @ApiProperty()
    readonly name?: string;

    @ApiProperty()
    readonly surname?: string;

    @ApiProperty()
    readonly email?: string;
}