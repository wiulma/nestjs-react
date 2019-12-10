import { Body, Controller, Get, Param, Post, Put ,Delete, UsePipes, ValidationPipe, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import { ApiResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto, DetailUserDto, ResponseUserListDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import {classToPlain} from "class-transformer";

@ApiTags('users')
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    /**
     * find all users
     */
    @Get()
    @ApiResponse({ status: 200, description: 'Find all users', type: ResponseUserListDto, isArray: true})
    @ApiForbiddenResponse({ description: 'FORBIDDEN'})
    async findAll(): Promise<ResponseUserListDto[]> {
        // TODO: https://github.com/typestack/class-transformer use groups
        return (await this.userService.findAll())
            .map(data => classToPlain(data, { groups: ["list"] }))
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'User details.', type: DetailUserDto})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    async findById(@Param('id') id: number): Promise<User> {
        console.log(`find user by id ${id}`);
        return this.userService.findById(id);
    }

    /**
     * save user
     */
    @Post()
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: DetailUserDto})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
    async createUser(@Body() user: CreateUserDto): Promise<User | null> {
        console.log('create user', user);
        return this.userService.create(user);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: DetailUserDto})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, skipMissingProperties: true }))
    async updateUser(@Param('id') id: number, @Body() user: DetailUserDto): Promise<Partial<User>> {
        console.log('update user with id', id, user);
        return {
            id,
            name: user.name,
            surname: user.surname,
            email: user.email,
        };
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    async deleteUser(@Param('id') id: number): Promise<any> {
        console.log('delete user with id', id);
        return null;
    }

}
