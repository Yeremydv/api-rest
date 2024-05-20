import { Response, Request } from "express"
import { ProductosService } from "../../services/producto.service"
import { CreateProductoDto } from "../../domain/dtos/producto/create-producto.dto"
import { UpdateProductoDto } from "../../domain/dtos/producto/update-producto.dto"



export class productoController{
    constructor(private readonly productosServices:ProductosService, ){}

    create = (req:Request, res:Response) => {
        const [error, createProductoDto] = CreateProductoDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.productosServices.create(createProductoDto!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateProductoDto] = UpdateProductoDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.productosServices.update(updateProductoDto!, id!)
    .then(category => res.json(category))
    .catch(error => res.status(500).json(error));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.productosServices.delete(id)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    findAll = async (req:Request, res:Response) => {
        this.productosServices.findAll()
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error));
    }
}