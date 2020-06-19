 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { StoreProduct } from "./StoreProduct";

@Entity({ name: "storevariant" })
export class StoreVariant {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  variantid: string;

  @Column()
  product_id: string;

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

  @Column({nullable: true})
  option1: string;

  @Column({nullable: true})
  option2: string;

  @Column({nullable: true})
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
  image_id: string;

  @Column()
  weight: number;

  @Column()
  weight_unit: string;

  @Column()
  inventory_item_id: string;

  @Column()
  inventory_quantity: number;

  @Column()
  old_inventory_quantity: number;

  @Column()
  requires_shipping: true;

  @OneToOne((type) => StoreProduct, (product) => product.varient)
  @JoinColumn()
  product: StoreProduct;
}
