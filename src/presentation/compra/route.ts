import { Router } from "express";
import { ComprasService } from "../../services/compra.service";
import { CompraController } from "./controller";



export class CompraRoute{
    static get route(): Router{
         const routes = Router();
         const comprasService = new ComprasService()
         const controller = new CompraController(comprasService) 
         routes.get('/', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
}