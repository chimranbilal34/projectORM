 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "brand" })
export class Brand {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  image: string; 

  @Column()
  thumbnail: string;

  @Column()
  isDeleted: boolean;

  @OneToOne((type) => Product, (product) => product.images)
  @JoinColumn()
  product: Product;
}