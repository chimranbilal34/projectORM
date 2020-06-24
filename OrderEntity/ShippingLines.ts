 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { ShopMoney } from "./ShopMoney";
import { PresentmentMoney } from "./PresentmentMoney";

@Entity({ name: "shippinglines" })
export class ShippingLines {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  shipping_linesid: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  source: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  requested_fulfillment_service_id: string;

  @Column({ nullable: true })
  delivery_category: string;

  @Column({ nullable: true })
  carrier_identifier: string;

  @Column()
  discounted_price: string;

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