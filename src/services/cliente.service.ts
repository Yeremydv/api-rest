import { prisma } from "../data/postgresql/database";
import { CreateClienteDto } from "../domain/dtos/cliente/create-cliente.dto";
import { UpdateClienteDto } from "../domain/dtos/cliente/update-cliente.dto";
import { ClienteEntity } from "../domain/entities/cliente.entity";



export class ClientesService{
    async create(createClienteDto:CreateClienteDto):Promise<ClienteEntity>{
        try {
            const newCliente = await prisma.cliente.create({
                data:{...createClienteDto}
            })

            if( !newCliente) throw Error("No se pudo anadir el cliente")
        
        return newCliente
        } catch (error) {
            throw Error('error'); 
        }
    }

    async update(updateClienteDto:UpdateClienteDto, id:string):Promise<ClienteEntity>{
        try {
            const updateCliente = await prisma.cliente.update({
                where: {id_cliente: updateClienteDto.id_cliente},
                data: {...updateClienteDto
                    }
                })

            if( !updateCliente ) throw Error("No se encuentra el cliente")
            return updateCliente
        } catch (error) {
            throw Error('error');
        }
    }

    async findAll(): Promise<ClienteEntity[]>{
        try {
            const newCliente = await prisma.cliente.findMany( );
        
    
            return newCliente;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<ClienteEntity>{
        try {
            const deleteCliente = await prisma.cliente.delete({
                where: {id_cliente: +id}
            })
            if( !deleteCliente) throw Error("No se encuentra el cliente")
            return deleteCliente
        } catch (error) {
            throw Error('error');
        }
      }
}