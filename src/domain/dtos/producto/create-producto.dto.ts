export class CreateProductoDto{
    constructor(
    public nombre: string,
    public precio: number,
    ){}

    static create(object:{[key:string]:any}):[string?, CreateProductoDto?]{
        const {nombre, precio} = object

        if(!nombre) return ['nombre es requerido', undefined]
        if(!precio) return ['precio es requerido', undefined]

        return [undefined, new CreateProductoDto(nombre, +precio)]
    }
}