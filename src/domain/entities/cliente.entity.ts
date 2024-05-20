export class ClienteEntity{
    constructor(
        public id_cliente: number,
        public nombre:string,
        public apellido:string,
        public cedula:number
    ){}
}