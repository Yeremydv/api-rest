export class CreateCompraDto{
    constructor(
    public fecha: Date,
    public clienteID: number,
    public productoID: number 
    ){}

    static create(object:{[key:string]:any}):[string?, CreateCompraDto?]{
        const {fecha, clienteID, productoID} = object
        let newDate = fecha;

        if( !fecha ) return ["Necesita fecha de la compra", undefined];
        if( fecha ){
            newDate = new Date( fecha );
            if( newDate.toString() === "Invalid Date" ) return ["La fecha es invalida", undefined]
        }

        if( !clienteID ) return ["necesita id de cliente", undefined];
        if( isNaN( +clienteID ) ) return ["El id debe ser un numero", undefined];

        if( !productoID ) return ["necesita id de producto", undefined];
        if( isNaN( +productoID ) ) return ["El id debe ser un numero", undefined];


        return [undefined, new CreateCompraDto(fecha, +clienteID, +productoID)]
    }
}