import { Tweet } from "./Tweet";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany((type) => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];
}
/* 

import { Tweet } from "./Tweet";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToOne((type) => Tweet)
  @JoinColumn()
  profile: Tweet;
}
 */

//  import { Varient1 } from "./Tweet";
//  import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

//  @Entity({ name: "products1" })
//  export class Product1 {
//    @PrimaryGeneratedColumn("uuid")
//    id: number;

//    @Column({ nullable: true })
//    firstName: string;

//    @Column()
//    lastName: string;

//    @Column()
//    age: number;

//    @OneToMany((type) => Varient1, (varient1) => varient1.product1)
//    varient1: Varient1[];
//  }