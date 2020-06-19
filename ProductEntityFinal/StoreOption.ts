 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { StoreProduct } from "./StoreProduct";

@Entity({ name: "storeoption" })
export class StoreOption {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({default: 0})
  optionid: string;

  @Column({ default: 0})
  product_id: string;

  @Column({default: ' '})
  name: string;

  @Column({ default: 0 })
  position: number;

  @Column("simple-array", { nullable: true })
  values: [string];

  @OneToOne((type) => StoreProduct, (product) => product.option)
  @JoinColumn()
  product: StoreProduct;
}






