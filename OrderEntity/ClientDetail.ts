 import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: "clientdetail" })
export class ClientDetail {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ default: "" })
  browser_ip: string;

  @Column({ default: "" })
  accept_language: string;

  @Column()
  user_agent: string;

  @Column({ nullable: true })
  session_hash: string;

  @Column({ nullable: true })
  company: string;

  @Column()
  browser_width: number;

  @Column({ default: 250 })
  browser_height: number;
}






