 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { StoreProduct } from "./StoreProduct";

@Entity({ name: "storeimage" })
export class StoreImage {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  image_id: string;

  @Column()
  product_id: string;

  @Column()
  position: number;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column({ nullable: true })
  alt: string;

  @Column({ type: "int", unsigned: true, default: 250 })
  width: number;

  @Column({ type: "int", unsigned: true, default: 250 })
  height: number;

  @Column({ default: " " })
  src: string;

  @Column("simple-array", { nullable: true })
  variant_ids: [string];

}

