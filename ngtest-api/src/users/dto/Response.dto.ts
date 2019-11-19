import { ApiModelProperty } from '@nestjs/swagger';

/**
 * ResponseUserDto
 * @class
 */

export class ResponseUserDto {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly surname: string;

    @ApiModelProperty()
    readonly email: string;
}