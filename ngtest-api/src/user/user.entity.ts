import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Expose, Exclude} from "class-transformer";

/**
 * Entity User
 */
@Entity({name: 'users'})
export class User {

  @Expose({ groups: ["list", "detail", "auth"] })
  @PrimaryGeneratedColumn()
  id: number;

  @Expose({ groups: ["list", "detail"] })
  @Column({ length: 50 })
  name: string;

  @Expose({ groups: ["list", "detail"] })
  @Column({ length: 50})
  surname: string;

  @Expose({ groups: ["list", "detail"] })
  @Column({ length: 50})
  email: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 10, nullable: true })
  dateBorn: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50, nullable: true })
  address: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50, nullable: true })
  city: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50, nullable: true })
  country: string;  

  @Expose({ groups: ["detail"] })
  @Column({ length: 50, nullable: true })
  imageUrl: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50, nullable: true })
  username: string;

  @Exclude()
  @Column({ length: 50, nullable: true })
  password: string;

}