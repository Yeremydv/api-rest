import { prisma } from "../data/postgresql/database";
import { CreateProductoDto } from "../domain/dtos/producto/create-producto.dto";
import { UpdateProductoDto } from "../domain/dtos/producto/update-producto.dto";
import { ProductoEntity } from "../domain/entities/producto.entity";



export class ProductosService{
    async create(createProductoDto:CreateProductoDto):Promise<ProductoEntity>{
        try {
            const newProducto = await prisma.producto.create({
                data:{...createProductoDto}
            })

            if( !newProducto) throw Error("No se pudo anadir el producto")
        
        return newProducto
        } catch (error) {
            throw Error('error'); 
        }
    }

    async update(updateProductoDto:UpdateProductoDto, id:string):Promise<ProductoEntity>{
        try {
            const updateProducto = await prisma.producto.update({
                where: {id_producto: updateProductoDto.id_producto},
                data: {...updateProductoDto
                    }
                })

            if( !updateProducto ) throw Error("No se encuentra el producto")
            return updateProducto
        } catch (error) {
            throw Error('error');
        }
    }

    async findAll(): Promise<ProductoEntity[]>{
        try {
            const newProducto = await prisma.producto.findMany( );
        
    
            return newProducto;
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string):Promise<ProductoEntity>{
        try {
            const deleteproducto= await prisma.producto.delete({
                where: {id_producto: +id}
            })
            if( !deleteproducto) throw Error("No se encuentra el producto")
            return deleteproducto
        } catch (error) {
            throw Error('error');
        }
      }
}