import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RequestUserDto } from './user.dto';
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
        return await this.userRepository.findOne(id);
    }

    /**
     * @function create
     * @param user 
     */
    async create(user: RequestUserDto): Promise<User> {
        return await this.userRepository.save(user);
    }

    /**
     * @function update 
     * @param id 
     * @param user 
     */
    async update(id: number, user: RequestUserDto): Promise<User> {
        const orgUser = await this.userRepository.findOne(id);
        if(!orgUser) throw new NotFoundException("USER_NOT_FOUND");
        const res = await this.userRepository.save({
            ...orgUser,
            ...user
        });
        return res;
    }

    /**
     * @function delete 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const user = await this.userRepository.findOne(id);
        if(!user) throw new NotFoundException("USER_NOT_FOUND");
        const res = !!(await this.userRepository.remove(user))
        return res;
    }

}
