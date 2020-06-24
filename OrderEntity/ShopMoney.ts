 import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "shopmoney" })
export class ShopMoney {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  amount: string;

  @Column()
  currency_code: string;
}






