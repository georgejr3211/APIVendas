import { Venda } from './venda.model';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() password: string;

  @OneToMany(type => Venda, venda => venda.user)
  @JoinColumn()
  vendas: [Venda]

  @CreateDateColumn() create_at: string;
  @UpdateDateColumn() update_at: string;

}