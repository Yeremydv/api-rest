export class CompraEntity{
    constructor(
        public id_compra:number, 
        public fecha: Date, 
        public clienteID: number,
        public productoID:number
    ){}
}