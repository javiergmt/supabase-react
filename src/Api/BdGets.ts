import { supabase } from "../supabaseClient";
import { bloqueosType, reservasType, showsType } from "./BdTypes";

export async function getBloqueos (id:number) { 

    try {
            const { data }  = await supabase.from('BLOQUEOS').select(
               `idResto,
                idBloqueo,
                fecha,
                idTurno,
                obs`
            ).eq('idResto', id)
        
            return data
    } catch (error) {
        console.log(error)
    } 
}

export async function grabarBloqueos (item:bloqueosType) {    
    //console.log(item)
    try {
        if (item.idBloqueo === 0) {
        const { data } = await supabase.from('BLOQUEOS')
        .insert({idResto: item.idResto,
                    fecha: item.fecha,
                    idTurno: item.idTurno,
                    obs: item.obs});
        return data
        } else {
            const { data } = await supabase.from('BLOQUEOS')
            .update({idResto: item.idResto,
                        fecha: item.fecha,
                        idTurno: item.idTurno,
                        obs: item.obs})
            .eq('idBloqueo', item.idBloqueo);
            return data
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getTurnos (id:number) { 
  
    try {
            const { data }  = await supabase.from('TURNOS').select(
               `idTurno,
                descripcion,
                horaDesde,
                horaHasta,
                intervaloMin`
            ).eq('idResto', id)
      
            return data
    } catch (error) {
        console.log(error)
    } 
}

export async function getShows (id:number,ids:number) { 
    
    try {
        if (ids === 0) {
            const { data }  = await supabase.from('SHOWS').select(
              `idResto,
               idShow,
               fecha,
               titulo,
               descripcion,
               imagen,
               hsAnticipacion,
               idTurno`
            ).eq('idResto', id)
            
            return data
        
        } else {
            const { data }  = await supabase.from('SHOWS').select(
                `idResto,
                 idShow,
                 fecha,
                 titulo,
                 descripcion,
                 imagen,
                 hsAnticipacion,
                 idTurno`
              ).eq('idResto', id)
              .eq('idShow', ids)
           
              return data
        }      

           
    } catch (error) {
        console.log(error)
    } 
}

export async function grabarShows (item:showsType) {    
    //console.log(item)
    try {
        if (item.idShow === 0) {
        const { data } = await supabase.from('BLOQUEOS')
        .insert({idResto: item.idResto,
                    fecha: item.fecha,
                    titulo: item.titulo,
                    descripcion: item.descripcion,
                    imagen: item.imagen,
                    hsAnticipacion: item.hsAnticipacion,
                    idTurno: item.idTurno,
                    });
        return data
        } else {
            const { data } = await supabase.from('BLOQUEOS')
            .update({idResto: item.idResto,
                        fecha: item.fecha,
                        titulo: item.titulo,
                        descripcion: item.descripcion,
                        imagen: item.imagen,
                        hsAnticipacion: item.hsAnticipacion,
                        idTurno: item.idTurno,
            })
            .eq('idShow', item.idShow);
            return data
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getResto (id:number) { 
  
    try {
        if (id === 0) {
            const { data }  = await supabase.from('RESTO').select(
               `idResto,
                nombreResto,
                imagen,
                descripcion,
                hsAnticipacion,
                linkCarta,
                linkWeb,
                linkGoogle,
                clave`
            )
            return data
        }else{
           
            const { data }  = await supabase.from('RESTO').select(
                `idResto,
                 nombreResto,
                 imagen,
                 descripcion,
                 hsAnticipacion,
                 linkCarta,
                 linkWeb,
                 linkGoogle,
                 clave`
             ).eq('idResto', id)
       
             return data
            }

    } catch (error) {
        console.log(error)
    } 
}

export async function getReservas (id:number,idoper:number) {
    try {
        if (idoper === 0) {
            const { data }  = await supabase.from('RESERVAS').select(
                `idResto, 
                 idReserva,
                 fecha,
                 idTurno,
                 nombre,
                 hora,
                 cant,
                 obs,
                 telefono,
                 email,
                 descargada,
                 aceptada`
            ).eq('idResto', id)
            return data
        } else {
        const { data }  = await supabase.from('RESERVAS').select(
            `idResto,
             idReserva,
             fecha,
             idTurno,
             nombre,
             hora,
             cant,
             obs,
             telefono,
             email,
             descargada,
             aceptada`
        ).eq('idResto', id)
        .eq('descargada', false)
        .eq('aceptada', 1)
        return data
        }
    } catch (error) {
        console.log(error)
    } 
}

export async function grabarReservas (item:reservasType) { 
    //console.log(item)
    try {
        if (item.idReserva === 0) {
        const { data } = await supabase.from('RESERVAS')
        .insert({idResto: item.idResto,
                    fecha: item.fecha,
                    idTurno: item.idTurno,
                    nombre: item.nombre,
                    hora: item.hora,
                    cant: item.cant,
                    obs: item.obs,
                    telefono: item.telefono,
                    email: item.email,
                    descargada: item.descargada,
                    aceptada: item.aceptada
                    });
        return data
        } else {
            const { data } = await supabase.from('RESERVAS')
            .update({idResto: item.idResto,
                        fecha: item.fecha,
                        idTurno: item.idTurno,
                        nombre: item.nombre,
                        hora: item.hora,
                        cant: item.cant,
                        obs: item.obs,
                        telefono: item.telefono,
                        email: item.email,
                        descargada: item.descargada,
                        aceptada: item.aceptada
            })
            .eq('idReserva', item.idReserva);
            return data
        }
    } catch (error) {
        console.log(error)
    }
}