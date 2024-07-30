import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useEffect } from "react";
import TaskForm from "./TaskForm";


export default function Account({ session }: any) {
  const navigate = useNavigate()

  // Descomentar esto para que solo los usuarios logueados puedan ver esta página
  // useEffect(() => {
  //   if (!session.user) {
  //     navigate('/')
  //   }
  // }, [session, navigste])
  return (
    <>
    <TaskForm/>
    
    <div>
    <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
      Sign Out
    </button>
  </div>
  </>
  )
}

