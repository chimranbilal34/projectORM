import { StoreImages } from './StoreImages';
import { StoreOption } from './StoreOption';
 import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { StoreVariant } from "./StoreVariant";
import { StoreImage } from './SimpleImage';

 @Entity({ name: "storeproducts" })
 export class StoreProduct {
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

   @Column()
   storeId: string;

   @Column()
   productId: string;

   @Column()
   updatedAt: string;

   @Column()
   createdAt: string;

   @OneToMany((type) => StoreVariant, (varient) => varient.product)
   varient: StoreVariant[];

   @OneToMany((type) => StoreOption, (option) => option.product)
   option: StoreOption[];

   @OneToMany((type) => StoreImages, (option) => option.product)
   images: StoreImages[];

   @OneToOne((type) => StoreImage)
   @JoinColumn()
   image: StoreImage;
 }
