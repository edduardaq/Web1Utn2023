import "reflect-metadata"
import { DataSource } from "typeorm"
import { Producto } from "./entity/Producto"
import { Proveedor } from "./entity/Proveedor"
import { Cabecera_factura } from "./entity/Cabecera_factura"
import { Cliente } from "./entity/Cliente"
import { Detalle_factura } from "./entity/Detalle_factura"
import { Vendedor } from "./entity/Vendedor"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "pruebautn",
    synchronize: true,
    logging: false,
    entities: [Producto, Proveedor, Cabecera_factura, Cliente, Detalle_factura, Vendedor],
    migrations: [],
    subscribers: [],
})
