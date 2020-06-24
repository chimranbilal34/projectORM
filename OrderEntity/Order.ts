 import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { BillingAddress } from "./BillingAddress";
import { ShippingAddress } from "./ShippingAddress";
import { ClientDetail } from "./ClientDetail";
import { Customer } from "./Customer";

 @Entity({ name: "order" })
 export class Order {
   @PrimaryGeneratedColumn("uuid")
   id: number;

   @Column()
   order_id: string;

   @Column("varchar")
   email: string;

   @Column({ nullable: true })
   closed_at: string;

   @Column()
   created_at: string;

   @Column({ type: "datetime" })
   updated_at: string;

   @Column()
   number: number;

   @Column({ type: "datetime" })
   note: string;

   @Column()
   token: string;

   @Column({ nullable: true })
   gateway: string;

   @Column()
   test: string;

   @Column()
   total_price: string;

   @Column()
   subtotal_price: string;

   @Column()
   total_weight: number;

   @Column()
   total_tax: string;

   @Column()
   taxes_included: boolean;

   @Column({ nullable: true })
   currency: string;

   @Column()
   financial_status: string;

   @Column()
   confirmed: boolean;

   @Column()
   total_discounts: number;

   @Column()
   total_line_items_price: string;

   @Column()
   cart_token: string;

   @Column({ nullable: true })
   buyer_accepts_marketing: boolean;

   @Column()
   name: string;

   @Column()
   referring_site: string;

   @Column()
   landing_site: string;

   @Column({ nullable: true })
   cancelled_at: string;

   @Column({ nullable: true })
   cancel_reason: string;

   @Column()
   total_price_usd: string;

   @Column()
   checkout_token: string;

   @Column({ nullable: true })
   reference: string;

   @Column({ nullable: true })
   user_id: string;

   @Column({ nullable: true })
   location_id: string;

   @Column({ nullable: true })
   source_identifier: string;

   @Column({ nullable: true })
   source_url: string;

   @Column()
   processed_at: string;

   @Column({ nullable: true })
   device_id: string;

   @Column({ nullable: true })
   phone: string;

   @Column()
   customer_locale: string;

   @Column()
   app_id: number;

   @Column({ nullable: true })
   browser_ip: string;

   @Column({ nullable: true })
   landing_site_ref: string;

   @Column()
   order_number: number;

   @Column({ type: "simple-array" })
   discount_applications: [string];

   @Column({ type: "simple-array" })
   discount_codes: [string];

   @Column({ type: "simple-array" })
   payment_gateway_names: [string];

   @Column()
   checkout_id: string;

   @Column({ nullable: true })
   source_name: string;

   @Column({ nullable: true })
   fulfillment_status: string;

   @Column({ type: "simple-array" })
   tax_lines: [string];

   @Column({ nullable: true })
   tags: string;

   @Column({ nullable: true })
   contact_email: string;

   @Column()
   order_status_url: string;

   @Column({ nullable: true })
   presentment_currency: string;

   @Column({ type: "simple-array" })
   refunds: [string];

   @Column()
   total_tip_received: string;

   @OneToOne((type) => BillingAddress)
   @JoinColumn()
   billing_address: BillingAddress;

   @OneToOne((type) => ShippingAddress)
   @JoinColumn()
   shipping_address: ShippingAddress;

   @OneToOne((type) => ClientDetail)
   @JoinColumn()
   client_details: ClientDetail;

   @OneToOne((type) => Customer)
   @JoinColumn()
   customer: Customer;

 }
