import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'

@Injectable()
export class UsersService {

    /**
     * @function findAll
     */
    async findAll(): Promise<User[]> {
        return []
    } 

}
