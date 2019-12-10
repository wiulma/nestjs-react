import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Exclude, Expose} from "class-transformer";

/**
 * Entity User
 */
@Entity({name: 'users'})
export class User {

  @Expose({ groups: ["list", "detail"] })
  @PrimaryGeneratedColumn()
  id: number;

  @Expose({ groups: ["list", "detail"] })
  @Column({ length: 50 })
  name: string;

  @Expose({ groups: ["list", "detail"] })
  @Column({ length: 50 })
  surname: string;

  @Expose({ groups: ["list", "detail"] })
  @Column({ length: 50 })
  email: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50 })
  dateBorn: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50 })
  address: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50 })
  city: string;

  @Expose({ groups: ["detail"] })
  @Column({ length: 50 })
  country: string;  

  @Expose({ groups: ["detail"] })
  @Column({ length: 50 })
  imageUrl: string;

}