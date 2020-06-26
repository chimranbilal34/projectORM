 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "store" })
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  thumbnail: string;

  @Column()
  isDeleted: boolean;

  @OneToOne((type) => Product, (brand) => brand.images)
  @JoinColumn()
  brand: Product;
}