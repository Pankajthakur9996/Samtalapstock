import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Signup } from './pages/Signup'
import { Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login1 } from './pages/login1'
import { Login2 } from './pages/Login2'
import { Login3 } from './pages/Login3'



function App() {


  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/create' element={< Signup/>}/>
      <Route path='/login1' element={< Login1/>}/>
      <Route path='/login2' element={< Login2/>}/>
      <Route path='/login3' element={< Login3/>}/>

    </Routes>
   
      
    </>
  )
}

export default App
