import { Router } from "express";
import ProdcutosControler from "../controller/productosControler";

const routes = Router();

routes.get('', ProdcutosControler.getALL);
routes.post('',ProdcutosControler.add)
export default routes;