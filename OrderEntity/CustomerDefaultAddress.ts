 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: "customerdefaultaddress" })
export class CustomerDefaultAddress {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ default: "" })
  addressid: string;

  @Column({ default: "" })
  customerid: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  company: string;

  @Column()
  address1: string;

  @Column({ default: 0 })
  address2: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  province: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  zip: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  province_code: string;

  @Column()
  country_code: string;

  @Column()
  country_name: string;

  @Column({ default: true })
  default: boolean;
}






