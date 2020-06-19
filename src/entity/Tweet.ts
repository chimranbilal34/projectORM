import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { User } from "./User";

@Entity({ name: "tweets" })
export class Tweet {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToOne((type) => User, user=> user.tweets)
  @JoinColumn()
  user: User;
}



/* import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { User } from "./User";

@Entity({ name: "tweets" })
export class Tweet {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  gender: string;

  @Column()
  photo: string;
}
 */

//  import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
// import { type } from "os";
// import { Product1 } from "./User";

// @Entity({ name: "variant1" })
// export class Varient1 {
//   @PrimaryGeneratedColumn("uuid")
//   id: number;

//   @Column()
//   title: string;

//   @Column()
//   content: string;

//   @OneToOne((type) => Product1, (product1) => product1.varient1)
//   @JoinColumn()
//   product1: Product1;
// }

