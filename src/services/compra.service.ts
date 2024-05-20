import { prisma } from "../data/postgresql/database";
import { CreateCompraDto } from "../domain/dtos/compra/create-compra.dto";
import { UpdateCompraDto } from "../domain/dtos/compra/update-compra.dto";
import { CompraEntity } from "../domain/entities/compra.entity";



export class ComprasService{
    async create (createCompraDto:CreateCompraDto):Promise<CompraEntity>{
        const {fecha} = createCompraDto
        try {
            const newCompra = await prisma.compra.create({
                data:{...createCompraDto,
                    fecha: new Date(fecha)
                }
            })
            if( !newCompra  ) throw Error("No se pudo anadir la Compra")
        
        return newCompra 
        } catch (error) {
            throw Error('error'); 
        }
    }

    async update(updateCompraDto:UpdateCompraDto, id:string):Promise<CompraEntity>{
        const {fecha} = updateCompraDto
        try {
            const updateCompra = await prisma.compra.update({
                where: {id_compra: updateCompraDto.id_compra},
                data: {...updateCompraDto, 
                      fecha: new Date(fecha)
                    }
                })

            if( !updateCompra ) throw Error("No se encuentra la compra")
            return updateCompra
        } catch (error) {
            throw Error('error');
        }
    }

    async findAll(): Promise<CompraEntity[]>{
        try {
            const newCompra  = await prisma.compra.findMany( );
        
    
            return newCompra;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<CompraEntity>{
        try {
            const deleteCompra = await prisma.compra.delete({
                where: {id_compra: +id}
            })
            if( !deleteCompra) throw Error("No se encuentra la compra")
            return deleteCompra
        } catch (error) {
            throw Error('error');
        }
      }
}