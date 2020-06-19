import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "variants" })
export class Variant {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  variantid: number;

  @Column()
  product_id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  sku: string;

  @Column()
  position: number;

  @Column()
  inventory_policy: string;

  @Column()
  compare_at_price: string;

  @Column()
  fulfillment_service: string;

  @Column()
  inventory_management: string;

  @Column()
  option1: string;

  @Column()
  option2: string;

  @Column()
  option3: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  taxable: boolean;

  @Column()
  barcode: "";

  @Column()
  grams: number;

  @Column()
  image_id: number;

  @Column()
  weight: number;

  @Column()
  weight_unit: string;

  @Column()
  inventory_item_id: number;

  @Column()
  inventory_quantity: number;

  @Column()
  old_inventory_quantity: number;

  @Column()
  requires_shipping: true;

  @OneToOne((type) => Product)
  @JoinColumn()
  product: Product;
}
