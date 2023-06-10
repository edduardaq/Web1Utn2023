import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  codigo_proveedor: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  direccion: string;

  @Column()
  provincia: string;

  @Column()
  telefono: number;

  @ManyToOne(() => Producto, (producto) => producto.proveedor)
  productos: Producto[];
}
