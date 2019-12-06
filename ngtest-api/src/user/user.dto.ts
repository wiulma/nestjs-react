import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsEmail } from 'class-validator';

/**
 * CreateUserDto
 * @class
 */
export class CreateUserDto {
    
    @ApiProperty()
    @IsString({message: 'INVALID.NAME'})
    readonly name: string;

    @ApiProperty()
    @IsString({message: 'INVALID.SURNAME'})
    readonly surname: string;

    @ApiProperty()
    @IsEmail({}, { message: 'INVALID.EMAIL' })
    readonly email?: string;

    @ApiProperty()
    @IsString()
    readonly bornDate?: string;

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
    readonly bornDate?: string;

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