import { ApiModelProperty } from '@nestjs/swagger';

/**
 * RequestUserDto
 * @class
 */
export class RequestUserDto {
    
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly surname: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly bornDate: string;

    @ApiModelProperty()
    readonly address: string;

    @ApiModelProperty()
    readonly city: string;

    @ApiModelProperty()
    readonly country: string;

    @ApiModelProperty()
    readonly imageUrl: string
}