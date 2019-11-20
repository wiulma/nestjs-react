import { Body, Controller, Get, Param, Post, Put ,Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { ApiResponse, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    /**
     * find all users
     */
    /*
    @Get()
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: ResponseUserDto, isArray: true})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async findAll(): Promise<ResponseUserDto[]> {
        return this.userService.findAll();
    }
*/
/*
    @Get(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: ResponseUserDto})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async findById(@Param('id') id: number): Promise<ResponseUserDto> {
        console.log(`find user by id ${id}`);
        return this.userService.findById(id);
    }
*/

    /**
     * save user
     */
    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: ResponseUserDto})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    @UsePipes(new ValidationPipe({ transform: true }))
    async createUser(@Body() user: CreateUserDto): Promise<ResponseUserDto | null> {
        console.log('create user', user);
        return this.userService.create(user);
    }

    /*
    @Put(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: ResponseUserDto})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateUser(@Param('id') id: number, @Body() user: RequestUserDto): Promise<ResponseUserDto> {
        console.log('update user with id', id, user);
        return {
            id,
            name: user.name,
            surname: user.surname,
            email: user.email
        };
    }
*/

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    async deleteUser(@Param('id') id: number): Promise<any> {
        console.log('delete user with id', id);
        return null;
    }

}
