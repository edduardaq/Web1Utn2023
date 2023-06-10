import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Producto } from "./Producto";
import { Cabecera_factura } from "./Cabecera_factura";

@Entity()
export class Vendedor {
  @PrimaryGeneratedColumn()
  codigo_vendedor: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  direccion: string;

  @Column()
  telefono: number;

  @Column()
  celular: number;
  @OneToMany(()=>Cabecera_factura, (Cabecera_factura)=>Cabecera_factura.vendedor)
  Cabecera_factura:Cabecera_factura[]
}
