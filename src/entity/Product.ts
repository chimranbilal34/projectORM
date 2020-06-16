import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { type } from "os";

@Entity({ name: "product" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column("varchar", { length: 5000 })
  body_html: string;

  @Column()
  vendor: string;

  @Column()
  product_type: string;

  @Column({ type: "datetime" })
  created_at: string;

  @Column()
  handle: string;

  @Column({ type: "datetime" })
  updated_at: string;

  @Column()
  published_at: string;

  @Column({ nullable: true })
  template_suffix: string;

  @Column()
  published_scope: string;

  @Column()
  tags: string;

  @Column({ type: "simple-json", nullable: true })
  variants: [{
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
  }];

  @Column({ type: "simple-json", nullable: true })
  options: {
    id: number;
    product_id: number;
    name: string;
    position: number;
    values: [string];
  };

  @Column({ type: "simple-json", nullable: true })
  images: [{
    id: number;
    product_id: number;
    position: number;
    created_at: string;
    updated_at: string;
    alt: string;
    width: number;
    height: number;
    src: string;
    variant_ids: [number];
  }];

  @Column({ type: "simple-json", nullable: true })
  image: {
    id: number;
    product_id: number;
    position: number;
    created_at: string;
    updated_at: string;
    alt: string;
    width: number;
    height: number;
    src: string;
    variant_ids: [number];
  };

  @Column()
  storeId: string;

  @Column()
  productId: string;

  @Column()
  updatedAt: string;
  
  @Column()
  createdAt: string;
}
