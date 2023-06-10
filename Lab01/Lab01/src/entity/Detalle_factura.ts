import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Producto } from "./Producto";
import { Cabecera_factura } from "./Cabecera_factura";

@Entity()
export class Detalle_factura {
  @PrimaryGeneratedColumn()
  numero: number;

  @Column()
  cantidad_codigo_producto: number;

  @OneToMany(() =>Cabecera_factura, (cabecera_factura)=>Cabecera_factura)
  Cabecera_factura: Cabecera_factura[]



  @ManyToOne(()=>Producto, (producto)=>producto.detallefacturacion)
  @JoinColumn({name:"id"})
  producto:Producto
}