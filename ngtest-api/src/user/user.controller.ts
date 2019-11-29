import { Body, Controller, Get, Param, Post, Put ,Delete, UsePipes, ValidationPipe, UseInterceptors} from '@nestjs/common';
import { ApiResponse, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { TransformInterceptor } from '../common/interceptors/transform.interceptor'
import { CreateUserDto, DetailUserDto, ResponseUserListDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.interface';

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
        return this.userService.findAll();
    }

    @Get(':id')
    @UseInterceptors(TransformInterceptor)
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
    async updateUser(@Param('id') id: number, @Body() user: DetailUserDto): Promise<User> {
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
    async deleteUser(@Param('id') id: number): Promise<any> {
        console.log('delete user with id', id);
        return null;
    }

}
