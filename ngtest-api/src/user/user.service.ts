import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

/**
 * UserService
 */
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    /**
     * @function findAll
     */
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    /**
     * @function findById
     * @param id 
     */
    async findById(id: number): Promise<User> {
        return <User>{
            id,
            name: 'Giorgio',
            surname: 'Zett',
            email: 'giorgio.zett@example.com'
        };
    }

    async create(user: CreateUserDto): Promise<User> {
        return <User>{
            id: 1,
            name: user.name,
            surname: user.surname,
            email: user.email
        }
    }

}
