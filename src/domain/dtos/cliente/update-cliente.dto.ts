export class UpdateClienteDto{
    constructor(
        public id_cliente:number,
        public nombre: string,
        public apellido: string,
        public cedula: number,
    ){};

    static update(object:{[key:string]:any}):[string?, UpdateClienteDto?]{
        const {id_cliente, nombre, apellido, cedula} = object

        if(!apellido) return ['apellido es requerido', undefined]
        if(!nombre) return ['nombre es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]


        if(isNaN(+id_cliente)) return ['id tiene que ser de tipo numero', undefined]
        if(+id_cliente < 0 ) return ['id tiene que ser un numero positivo', undefined]


        return [undefined, new UpdateClienteDto(+id_cliente, nombre, apellido, +cedula)]
    }
}