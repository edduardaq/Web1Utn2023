import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Producto } from "./Producto";
import { Detalle_factura } from "./Detalle_factura";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";


@Entity()
export class Cabecera_factura {
  @PrimaryGeneratedColumn()
  numero: number;

  @Column()
  fecha: Date;

  @Column()
  ruc_cliente: number;

  @Column()
  codigo_vendedor: number;

  @ManyToOne( ()=> Detalle_factura,(detallefactura)=>detallefactura.Cabecera_factura)
  detallefactura: Detalle_factura


  @ManyToOne(()=>Cliente,(Cliente)=>Cliente.Cabecera_factura)
  Cliente: Cliente

  @ManyToOne(()=>Vendedor,(vendedor)=>vendedor.Cabecera_factura)
  vendedor: Vendedor

}