 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: "destinationlocation" })
export class DestinationLocation {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  destination_location: string;

  @Column({ default: "" })
  country_code: string;

  @Column({ default: "" })
  province_code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  city: string;

  @Column({ default: "" })
  zip: string;
}






