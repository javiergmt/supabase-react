// Este es el formulario donde se le pide al usuario que ingrese su correo electrónico para iniciar sesión.
// La autenticación se realiza a través de un magic link, un enlace que se envía al correo electrónico del usuario.
import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event:any) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert( error.message)
    } else {
      alert('Revise el email ingresado y siga el enlace!')
    }
    setLoading(false)
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">Conexion via magic link con el email </p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Cargando..</span> : <span>Enviar y obtener enlace</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}