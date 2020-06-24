import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { type } from "os";
import { Variant } from "../types/Variant";

@Entity({ name: "product" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column("varchar", { length: 5000 })
  body_html: string;

  @Column()
  vendor: string;

  @Column()
  product_type: string;

  @Column({ type: "datetime" })
  created_at: string;

  @Column()
  handle: string;

  @Column({ type: "datetime" })
  updated_at: string;

  @Column()
  published_at: string;

  @Column({ nullable: true })
  template_suffix: string;

  @Column()
  published_scope: string;

  @Column()
  tags: string;
  //jsonb have no support in mysql
  @Column({ type: "json", nullable: true })
  variants: [Variant];

  @Column({ type: "simple-json", nullable: true })
  options: {
    id: number;
    product_id: number;
    name: string;
    position: number;
    values: [string];
  };

  @Column({ type: "simple-json", nullable: true })
  images: [
    {
      id: number;
      product_id: number;
      position: number;
      created_at: string;
      updated_at: string;
      alt: string;
      width: number;
      height: number;
      src: string;
      variant_ids: [number];
    }
  ];

  @Column({ type: "simple-json", nullable: true })
  image: {
    id: number;
    product_id: number;
    position: number;
    created_at: string;
    updated_at: string;
    alt: string;
    width: number;
    height: number;
    src: string;
    variant_ids: [number];
  };

  @Column()
  storeId: string;

  @Column()
  productId: string;

  @Column()
  updatedAt: string;

  @Column()
  createdAt: string;
}
