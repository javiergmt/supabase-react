export interface  bloqueosType {
    idResto: number,
    idBloqueo: number,
    fecha: Date,
    idTurno: number,
    obs: string,
}

export interface  turnosType {
    idTurno: number,
    descripcion: string,
    horaDesde: string,
    horaHasta: string,
    intervaloMin:number,

}

export interface showsType {
    idResto: number,
    idShow: number,
    fecha:Date,
    titulo: string,
    descripcion: string,
    imagen: string,
    hsAnticipacion: number,
    idTurno:number,
    
}

export interface restoType {
    idResto: number,
    nombreResto: string,
    imagen: string,
    descripcion: string,
    hsAnticipacion: number,
    linkCarta: string,
    linkWeb: string,
    linkGoogle: string,
    clave: string,
}

export interface reservasType {
    idResto: number,
    idReserva: number,
    fecha: Date,
    idTurno: number,
    nombre: string,
    hora: string,
    cant: number,
    obs: string,
    telefono: string,
    email: string,
    descargada: boolean,
    aceptada: number,
}