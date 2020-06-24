 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { CustomerDefaultAddress } from "./CustomerDefaultAddress";

@Entity({ name: "cutomer" })
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ default: 0 })
  customerid: string;

  @Column({ default: 0 })
  email: string;

  @Column({ default: false })
  accepts_marketing: boolean;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  orders_count: number;

  @Column()
  state: string;

  @Column()
  total_spent: string;

  @Column()
  last_order_id: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  verified_email: string;

  @Column({ nullable: true })
  multipass_identifier: string;

  @Column()
  tax_exempt: boolean;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: " " })
  tags: string;

  @Column()
  last_order_name: string;

  @Column()
  currency: string;

  @Column()
  accepts_marketing_updated_at: string;

  @Column({ nullable: true })
  marketing_opt_in_level: string;

  @OneToOne((type) => CustomerDefaultAddress)
  @JoinColumn()
  defaultaddress: CustomerDefaultAddress;
}






