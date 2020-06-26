import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne, ManyToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {  Variant } from "./Variant";
import { Brand } from './Brand';
import { Category } from "./Category";
import {IsString} from "class-validator"
 @Entity({ name: "product" })
 export class Product {
   @PrimaryGeneratedColumn("uuid")
   id: number;

   @Column()
   title: string;

   @Column()
   vendor: string;

   @Column()
   description: string;

   
   @Column("text")
   @IsString()
   highlights:  //TODO

   @OneToMany((type) => Brand, (brand) => brand.product)
   brand?: Brand[]; //One to many, optional

   @Column()
   productType?: string; //optional

   @Column()
   handle: string; //TODO hanlde generation and validations

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

   @Column()
   universal: boolean; //TODO Enum, Model Scope

   @Column({ default: false })  // type softDelete
   isDeleted: boolean;

   @Column()
   tags: [string]; //Separate Table

   @OneToMany((type) => Variant, (varient) => varient.product)
   varient: Variant[];

   @Column({ type: "json", nullable: true }) //Relationship,jsonb
   images: [
     {
       position: number;
       createdAt: string;
       updatedAt: string;
       alt: string;
       width: number;
       height: number;
       src: string;
       variantIds: [number];
     }
   ];

   @Column({ type: "json", nullable: true })//Mevris dataType
   options: [
     {
       productId: number;
       name: string;
       position: number;
       values: [string];
     }
   ];

   @Column({ type: "json", nullable: true })
   image: {

     position: number;
     createdAt: string;
     updatedAt: string;
     alt: string;
     width: number;
     height: number;
     src: string;
     variantIds: [number];
   };

   @ManyToMany((type) => Category)
   category: Category[];

   //TODO Eager relations and Lazy relations
 }


