 import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { type } from "os";
import { Product } from "./Product";
import { StoreProduct } from "../src/entity/StoreProduct";

@Entity({ name: "store" })
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  handler: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  customerEmail: string;

  @Column()
  avatar: string;

  @Column()
  domain: string;

  @Column()
  storeAddress: string;
  
  @ManyToMany((type) => StoreProduct)
  category: StoreProduct[];
}