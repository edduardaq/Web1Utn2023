import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Proveedor } from "./Proveedor";
import { Detalle_factura } from "./Detalle_factura";

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  stock_Maximo_Producto: number;

  @Column()
  stock_Minimo_Producto: number;

  @Column()
  estado: boolean;

  @Column()
  codigo_proveedor: number;
  @OneToMany(() =>Detalle_factura,(Detalle_factura)=>Detalle_factura.producto)
  detallefacturacion: Detalle_factura[]

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.productos)
    @JoinColumn({ name: "proveedor_id" })
    proveedor: Proveedor;
}
