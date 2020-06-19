import { Variant } from './Variant';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { type } from "os";
import { Options } from './Options';
import { Images } from './Images';
import { Image } from './Image';


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
  created_at: Date;

  @Column()
  handle: string;

  @Column({ type: "datetime" })
  updated_at: Date;

  @Column()
  published_at: string;

  @Column({ nullable: true })
  template_suffix: string;

  @Column()
  published_scope: string;

  @Column()
  tags: string;

  @OneToMany((type) => Variant, (variant) => variant.product)
  variants: Variant[];

  @OneToMany((type) => Options, (options) => options.product)
  options: Options[];

  @OneToMany((type) => Images, (images) => images.product)
  images: Images[];

  @OneToOne((type) => Image)
  @JoinColumn()
  image: Image

  @Column()
  storeId: string;

  @Column()
  productId: string;

  @Column()
  updatedAt: string;

  @Column()
  createdAt: string;
}
