import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsEmail } from 'class-validator';

/**
 * CreateUserDto
 * @class
 */
export class CreateUserDto {
    
    @ApiModelProperty()
    @IsString({message: 'INVALID.NAME'})
    readonly name: string;

    @ApiModelProperty()
    @IsString({message: 'INVALID.SURNAME'})
    readonly surname: string;

    @ApiModelProperty()
    @IsEmail({}, { message: 'INVALID.EMAIL' })
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

/**
 * DetailUserDto
 * @class
 */
export class DetailUserDto {

    @ApiModelProperty()
    @IsInt({message: 'INVALID.NAME'})
    readonly id: number;
    
    @ApiModelProperty()
    @IsString({message: 'INVALID.NAME'})
    readonly name?: string;

    @ApiModelProperty()
    @IsString({message: 'INVALID.SURNAME'})
    readonly surname?: string;

    @ApiModelProperty()
    @IsEmail({}, { message: 'INVALID.EMAIL' })
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

/**
 * ResponseUserListDto
 * @class 
 */
export class ResponseUserListDto {
    @ApiModelProperty()
    readonly id?: number;

    @ApiModelProperty()
    readonly name?: string;

    @ApiModelProperty()
    readonly surname?: string;

    @ApiModelProperty()
    readonly email?: string;
}