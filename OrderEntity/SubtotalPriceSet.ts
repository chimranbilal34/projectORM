 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { ShopMoney } from "./ShopMoney";
import { PresentmentMoney } from "./PresentmentMoney";

@Entity({ name: "subtotalpriceset" })
export class SubtotalPriceSet {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @OneToOne((type) => ShopMoney)
  @JoinColumn()
  shop_money: ShopMoney;

  @OneToOne((type) => PresentmentMoney)
  @JoinColumn()
  presentment_money: PresentmentMoney;
}