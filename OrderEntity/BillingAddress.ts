 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: "billingaddress" })
export class BillingAddress {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ default: "" })
  first_name: string;

  @Column({ default: "" })
  address1: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  zip: string;

  @Column({ nullable: true })
  province: string;

  @Column({ default: "" })
  country: string;

  @Column({ default: "" })
  last_name: string;

  @Column({ default: "" })
  address2: string;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @Column({ nullable: true })
  name: string;

  @Column({ default: "" })
  country_code: string;

  @Column({ nullable: true })
  province_code: string;
}






