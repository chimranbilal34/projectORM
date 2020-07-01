import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Variant } from "./Variant";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Option } from "./Option";
import { Images } from "./Images";
import { Image } from "./Image";

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
  highlights: string; //TODO

  @OneToMany((type) => Brand, (brand) => brand.product)
  brand?: Brand[]; //One to many, optional

  @Column()
  productType?: string; //optional

  @Column()
  handle: string; //TODO hanlde generation and validations

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column()
  scope: boolean; //TODO Enum, Model Scope for universal

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  tags: [string]; 

  @OneToMany((type) => Variant, (varient) => varient.product)
  varient: Variant[];

  @Column({ type: "json", nullable: true }) //Mevris dataType
  options: [
    {
      productId: number;
      name: string;
      position: number;
      values: [string];
    }
  ];

  @ManyToMany((type) => Category)
  category: Category[];

  @OneToMany((type) => Option, (option) => option.product)
  option: Option[];

  @OneToMany((type) => Images, (images) => images.product)
  images: Images[];

  @OneToOne((type) => Image)
  @JoinColumn()
  image: Image;
}
