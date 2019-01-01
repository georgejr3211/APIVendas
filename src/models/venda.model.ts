import { User } from './user.model';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Venda extends BaseEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column() nome_produto: string;

  @Column('decimal') preco_produto: number;

  @Column() status_pagamento: string;

  @Column('int') quantidade: number;

  @Column() comprador: string;

  @ManyToOne(type => User)
  @JoinColumn()
  user: User

  @CreateDateColumn() create_at: string;
  @UpdateDateColumn() update_at: string;

}