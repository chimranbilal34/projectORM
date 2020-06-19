import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "image" })
export class Image {
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
}
