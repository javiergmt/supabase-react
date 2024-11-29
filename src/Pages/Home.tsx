
import { getBloqueos,getTurnos,getShows,getResto,getReservas } from "../Api/BdGets";
import { bloqueosType,turnosType,showsType,restoType,reservasType } from "../Api/BdTypes";
import { useEffect, useState } from "react";



export default function Home() {
  const [list_Bloqueos, setList_Bloqueos] = useState([] as bloqueosType[])
  const [list_Turnos, setList_Turnos] = useState([] as turnosType[])
  const [list_Shows, setList_Shows] = useState([] as showsType[])
  const [list_Resto, setList_Resto] = useState([] as restoType[])
  const [list_Reservas, setList_Reservas] = useState([] as reservasType[])
  const [okB, setOkB] = useState(false)
  const [okT, setOkT] = useState(false)
  const [okS, setOkS] = useState(false)
  const [okR, setOkR] = useState(false)
  const [ok, setOk] = useState(false)
 

  useEffect(() => {
    getBloqueos(1).then((res)  => {
      if (res) {
        setList_Bloqueos(res)
        setOkB(true)
        console.log('Bloqueos',list_Bloqueos);
      }
    })
  }, [okB])

  
   useEffect(() => {
    getTurnos(1).then((res)  => {
      if (res) {
        setList_Turnos(res)
        setOkT(true)
        console.log('Turnos: ',list_Turnos);
      }
    })
    }, [okT])
       
  useEffect(() => {
    getShows(1,0).then((res)  => {
      if (res) {
        setList_Shows(res)
        setOkS(true)
        console.log('Shows:',list_Shows);
      }
    })
  }, [okS])

  useEffect(() => {
    getResto(0).then((res)  => {
      if (res) {
        setList_Resto(res)
        setOkR(true)
        console.log('Resto:',list_Resto);
      }
    })
  }, [okR])  
    
  useEffect(() => {
    getReservas(1,1).then((res)  => {
      if (res) {
        setList_Reservas(res)
        setOk(true)
        console.log('Reservas:',list_Reservas);
      }
    })
   
  }, [ok])  
  
  return (
  <>
    
   
  </>
  )
}

