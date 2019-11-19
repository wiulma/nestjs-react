import { Body, Controller, Get, Param, Post, Put , Delete} from '@nestjs/common';

import { ApiResponse, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { RequestUserDto } from './dto/Request.dto';
import { ResponseUserDto } from './dto/Response.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    /**
     * find all users
     */
    @Get()
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: ResponseUserDto, isArray: true})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async findAll(): Promise<ResponseUserDto[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: ResponseUserDto})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async findById(@Param('id') id: string): Promise<ResponseUserDto> {
        console.log(`find user by id ${id}`);
        return {
            id,
            name: 'Giorgio',
            surname: 'Zett',
            email: 'giorgio.zett@exxample.com'
        };
    }

    /**
     * save user
     */
    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: ResponseUserDto})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async createUser(@Body() user: RequestUserDto): Promise<ResponseUserDto | null> {
        console.log('create user', user);
        return {
            id: '1234',
            name: user.name,
            surname: user.surname,
            email: user.email
        };
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: ResponseUserDto})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateUser(@Param('id') id: string, @Body() user: RequestUserDto): Promise<ResponseUserDto> {
        console.log('update user with id', id, user);
        return {
            id,
            name: user.name,
            surname: user.surname,
            email: user.email
        };
    }


    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    async deleteUser(@Param('id') id: string): Promise<any> {
        console.log('delete user with id', id);
        return null;
    }

}
