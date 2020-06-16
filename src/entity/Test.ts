import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { type } from "os";

@Entity({ name: "test" })
export class Test {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column({type: "simple-json", nullable: true})
  variants: {
    id: number;
    product_id: number;
    title: string;
    price: string;
    sku: string;
    position: number;
    inventory_policy: string;
    compare_at_price: string;
    fulfillment_service: string;
    inventory_management: string;
    option1: string;
    option2: string;
    option3: string;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: "";
    grams: number;
    image_id: number;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: true;
  };

}
