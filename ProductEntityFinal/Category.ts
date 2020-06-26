 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "category" })
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  icon: string;

  @Column({ default: false })
  hasChildren: boolean;

  @Column()
  count: number;

  @Column()
  level: number;

  @Column({ default: false })
  disabled: boolean;

  @Column()
  type: string;

  @Column({ default: false })
  isDeleted: false;
}