import { Response, Request } from "express";
import { ComprasService } from "../../services/compra.service";
import { CreateCompraDto } from "../../domain/dtos/compra/create-compra.dto";
import { UpdateCompraDto } from "../../domain/dtos/compra/update-compra.dto";


export class CompraController{
    constructor(private readonly comprasServices:ComprasService, ){}

    create = (req:Request, res:Response) => {
        const [error, createCompraDto] = CreateCompraDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.comprasServices.create(createCompraDto!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateCompraDto] = UpdateCompraDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.comprasServices.update(updateCompraDto!, id!)
    .then(category => res.json(category))
    .catch(error => res.status(500).json(error));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.comprasServices.delete(id)
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error))
    }

    findAll = async (req:Request, res:Response) => {
        this.comprasServices.findAll()
        .then(category => res.json(category))
        .catch(error => res.status(500).json(error));
    }
}