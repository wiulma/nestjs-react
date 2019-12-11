import { Body, Controller, Get, Param, Post, Patch ,Delete, UsePipes, ValidationPipe, HttpCode} from '@nestjs/common';
import { ApiResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { RequestUserDto, DetailUserDto, ResponseUserListDto } from './user.dto';
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
    @HttpCode(201)
    async createUser(@Body() user: RequestUserDto): Promise<null> {
        console.log('create user', user);
        await this.userService.create(user);
        return;
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: DetailUserDto})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true, skipMissingProperties: true }))
    @HttpCode(204)
    async updateUser(@Param('id') id: number, @Body() user: RequestUserDto): Promise<null> {
        console.log('update user with id', id, user);
        await this.userService.update(id, user);
        return;
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    @HttpCode(204)
    async deleteUser(@Param('id') id: number): Promise<null> {
        console.log('delete user with id', id);
        await this.userService.delete(id);
        return;
    }

}
