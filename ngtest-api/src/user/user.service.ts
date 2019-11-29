import { Injectable } from '@nestjs/common';
import { User } from './user.interface'

@Injectable()
export class UserService {

    /**
     * @function findAll
     */
    async findAll(): Promise<User[]> {
        return []
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

    async create(user: User): Promise<User> {
        return <User>{
            id: 1,
            name: user.name,
            surname: user.surname,
            email: user.email
        }
    }

}
