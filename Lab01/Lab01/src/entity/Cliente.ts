import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Producto } from "./Producto";
import { Cabecera_factura } from "./Cabecera_factura";
@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  ruc_cliente: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  direccion: string;

  @Column()
  telefono: number;
  @OneToMany(()=>Cabecera_factura, (Cabecera_factura)=>Cabecera_factura.Cliente)
  Cabecera_factura:Cabecera_factura[]
}