 import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "image" })
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  productId: string;

  @Column()
  position: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({ nullable: true })
  alt: string;

  @Column({ type: "int", unsigned: true, default: 250 })
  width: number;

  @Column({ type: "int", unsigned: true, default: 250 })
  height: number;

  @Column({ default: " " })
  src: string;

  @Column("simple-array", { nullable: true })
  variantIds: [string];
}

