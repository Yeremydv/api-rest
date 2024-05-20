export class CreateClienteDto{
    constructor(
        public nombre: string,
        public apellido: string,
        public cedula: number,
    ){};

    static create(object:{[key:string]:any}):[string?, CreateClienteDto?]{
        const {nombre, apellido, cedula} = object

        if(!apellido) return ['apellido es requerido', undefined]
        if(!nombre) return ['nombre es requerido', undefined]
        if(!cedula) return ['cedula es requerida', undefined]



        return [undefined, new CreateClienteDto(nombre, apellido, +cedula)]
    }
}