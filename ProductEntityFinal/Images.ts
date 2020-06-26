 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "images" })
export class Images {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  position: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column({ nullable: true })
  alt: string;

  @Column({ type: "int", unsigned: true, default: 250 })
  width: number;

  @Column({ type: "int", unsigned: true, default: 250 })
  height: number;

  @Column({ default: " " })
  src: string;
  
}

