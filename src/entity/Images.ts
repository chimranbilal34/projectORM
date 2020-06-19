import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "Images" })
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  imageid: number;

  @Column()
  product_id: number;

  @Column()
  position: number;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  alt: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  src: string;

  @Column("simple-array")
  variant_ids: [number];

  @OneToOne((type) => Product, product=> product.options)
  @JoinColumn()
  product: Product;
}