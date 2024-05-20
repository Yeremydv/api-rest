import { Request, Response } from "express";
import { ClientesService } from "../../services/cliente.service";
import { CreateClienteDto } from "../../domain/dtos/cliente/create-cliente.dto";
import { UpdateClienteDto } from "../../domain/dtos/cliente/update-cliente.dto";

export class ClienteController{
    constructor(private readonly clientesServices:ClientesService, ){}

    create = (req:Request, res:Response) => {
        const [error, createClienteDto] = CreateClienteDto.create(req.body)
        if(error) return res.status(400).json({error})
        this.clientesServices.create(createClienteDto!)
        .then(category => res.json(category))
        .catch(error => res.status(500).json({error}))
    }

    update = (req:Request, res:Response) => {
    const id = req.params.id 
    const [error, updateClienteDto] = UpdateClienteDto.update({...req.body, id})
    if(error) return res.status(400).json({error})
    this.clientesServices.update(updateClienteDto!, id!)
    .then(category => res.json(category))
    .catch(error => res.status(500).json({error}));
    }

    delete = (req:Request, res:Response) => {
        const id = req.params.id
        this.clientesServices.delete(id)
        .then(category => res.json(category))
        .catch(error => res.status(500).json({error}))
    }

    findAll = async (req:Request, res:Response) => {
        this.clientesServices.findAll()
        .then(category => res.json(category))
        .catch(error => res.status(500).json({error}));
    }
}