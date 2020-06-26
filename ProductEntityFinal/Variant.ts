 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { type } from "os";
import { Product } from "./Product";

@Entity({ name: "variant" })
export class Variant {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  sku: string;

  @Column()
  position: number;

  @Column()
  inventoryPolicy: string;

  @Column()
  compareAtPrice: string;

  @Column()
  fulfillmentService: string;

  @Column()
  inventoryManagement: string;

  @Column({nullable: true})
  option1: string;

  @Column({nullable: true})
  option2: string;

  @Column({nullable: true})
  option3: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  taxable: boolean;

  @Column()
  barcode: "";

  @Column()
  grams: number;

  @Column()
  weight: number;

  @Column()
  weightInit: string;

  @Column()
  inventoryItemId: string;

  @Column()
  inventoryQuantity: number;

  @Column()
  oldInventoryQuantity: number;

  @Column()
  requiresShipping: true;

  @OneToOne((type) => Product, (product) => product.varient)
  @JoinColumn()
  product: Product;
}
