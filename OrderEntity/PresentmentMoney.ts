 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: "presentmentmoney" })
export class PresentmentMoney {
  @PrimaryGeneratedColumn("uuid")
  id: number;
}






