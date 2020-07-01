 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "option" })
export class Option {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({default: ' '})
  name: string;

  @Column({ default: 0 })
  position: number;

  @Column("simple-array", { nullable: true })
  values: [string];

  @OneToOne((type) => Product, (product) => product.option)
  @JoinColumn()
  product: Product;
}