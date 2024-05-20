import { Router } from "express";
import { ProductosService } from "../../services/producto.service";
import { productoController } from "./controller";



export class ProdcutoRoute{
    static get route(): Router{
         const routes = Router();
         const productosService = new ProductosService()
         const controller = new productoController(productosService) 
         routes.get('/', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;

    }     
}