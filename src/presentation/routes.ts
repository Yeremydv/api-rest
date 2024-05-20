import { Router } from "express";
import { ClienteRoute } from "./cliente/route";
import { CompraRoute } from "./compra/route";
import { ProdcutoRoute } from "./producto/route";


export class AppRoute{
    static get route():Router{
        const routes = Router()
        routes.use('/api/clientes', ClienteRoute.route)
        routes.use('/api/compras', CompraRoute.route)
        routes.use('/api/productos', ProdcutoRoute.route)

        return routes
    }
}