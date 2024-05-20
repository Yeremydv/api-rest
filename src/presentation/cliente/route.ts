import { Router } from "express";
import { ClienteController } from "./controller";
import { ClientesService } from "../../services/cliente.service";



export class ClienteRoute{
    static get route(): Router{
         const routes = Router();
         const clientesService = new ClientesService()
         const controller = new ClienteController(clientesService) 
         routes.get('/', controller.findAll);
         routes.put('/:id', controller.update);
         routes.delete('/:id', controller.delete);
         routes.post('/', controller.create)
         return routes;
     }
 }