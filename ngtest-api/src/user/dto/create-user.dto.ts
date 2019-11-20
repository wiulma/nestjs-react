import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsEmail } from 'class-validator';

/**
 * CreateUserDto
 * @class
 */
export class CreateUserDto {
    
    @ApiModelProperty()
    @IsString({message: 'MISSING.NAME'})
    readonly name: string;

    @ApiModelProperty()
    @IsString({message: 'MISSING.SURNAME'})
    readonly surname: string;

    @ApiModelProperty()
    @IsEmail()
    readonly email?: string;

    @ApiModelProperty()
    @IsString()
    readonly bornDate?: string;

    @ApiModelProperty()
    @IsString()
    readonly address?: string;

    @ApiModelProperty()
    @IsString()
    readonly city?: string;

    @ApiModelProperty()
    @IsString()
    readonly country?: string;

    @ApiModelProperty()
    @IsString()
    readonly imageUrl?: string
}