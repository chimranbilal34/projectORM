 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "Attribute" })
export class Attribute {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  slug: string;

  @Column()
  attributeType: string;

  @Column()
  name: string;

  @Column()
  required: boolean;

  @Column()
  inputType: boolean;

  @Column()
  visible: string;

  @Column({type: "json"})
  options: [];

  @Column({ default: false })
  disabled: boolean;

  @Column()
  type: string;

  @Column({ default: false })
  isDeleted: false;
}