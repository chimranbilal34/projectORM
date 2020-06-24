 import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import { ShopMoney } from "./ShopMoney";
import { PresentmentMoney } from "./PresentmentMoney";

@Entity({ name: "storelineitem" })
export class LineItem {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ default: "" })
  line_itemsid: string;

  @Column({ default: "" })
  variant_id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  sku: string;

  @Column({ nullable: true })
  variant_title: string;

  @Column({ default: "" })
  vendor: string;

  @Column({ default: "" })
  fulfillment_service: string;

  @Column({ default: "" })
  product_id: string;

  @Column()
  requires_shipping: boolean;

  @Column()
  taxable: boolean;

  @Column()
  name: string;

  @Column()
  variant_inventory_management: string;

  @Column({ type: "simple-array" })
  properties: [string];

  @Column({ nullable: true })
  product_exists: boolean;

  @Column({ default: "" })
  fulfillable_quantity: number;

  @Column()
  grams: number;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  total_discount: string;

  @Column({ nullable: true })
  fulfillment_status: string;

  @OneToOne((type) => ShopMoney)
  @JoinColumn()
  price_set: ShopMoney;

  @OneToOne((type) => PresentmentMoney)
  @JoinColumn()
  total_discount_set: PresentmentMoney;

  @Column({ type: "simple-array" })
  discount_allocations: [string];

  @Column({ type: "simple-array" })
  tax_lines: [string];
}






