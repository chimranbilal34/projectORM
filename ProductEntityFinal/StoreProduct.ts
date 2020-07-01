import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { type } from "os";
import { Product } from "./Product";
import { Store } from "./Store";

@Entity({ name: "storeproduct" })
export class StoreProduct {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  price: number;

  @Column()
  compareAtPrice: number;

  @Column()
  quantity: number;

  @Column()
  sku: string;
}
