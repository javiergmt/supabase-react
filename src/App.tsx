import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {


  return (
    <>
    {/* <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div> */}
    <div className='App'>
      <Routes>
        {/* <Route path="/" element={!session ? <Auth /> : <Home key={session.user.id} session={session} />} /> */}
        <Route path="/" element={<Home/>} /> 
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
    </>
  )
}

export default App