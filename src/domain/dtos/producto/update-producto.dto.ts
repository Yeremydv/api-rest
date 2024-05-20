export class UpdateProductoDto{
    constructor(
    public id_producto:number,
    public nombre: string,
    public precio: number
    ){}

    static update(object:{[key:string]:any}):[string?, UpdateProductoDto?]{
        const {id_producto, nombre, precio} = object

        if(!nombre) return ['nombre es requerido', undefined]
        if(!precio) return ['precio es requerido', undefined]

        if(isNaN(+id_producto)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_producto < 0 ) return ['id tiene que ser un numero positivo', undefined]

        return [undefined, new UpdateProductoDto(+id_producto, nombre, +precio)]
    }
}