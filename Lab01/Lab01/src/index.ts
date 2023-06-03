import * as express from "express"
import { AppDataSource } from "./data-source"
import cors = require("cors")
import helmet from "helmet"
import routes from "./routes";

// Este es el servidor 3000
const PORT = process.env.port || 3000;

AppDataSource.initialize().then(async () => {

    // create express app //ES LA INTANCIA DEL SERVIDOR
    const app = express()
    app.use(cors());
    app.use(helmet());
    app.use(express.json);


    //Rutas
    app.use('/', routes)

    // start express server
     app.listen(PORT,()=>{console.log(`Servidor corriendo en puerto: ${PORT}`)});

    
}).catch(error => console.log(error))



