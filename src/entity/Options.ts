import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "options" })
export class Options {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  optionid: number;

  @Column()
  product_id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  @Column("simple-array")
  values: [string];

  @OneToOne((type) => Product, product=>product.options)
  @JoinColumn()
  product: Product;
}
