import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Signup } from './pages/Signup'
import { Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login1 } from './pages/login1'



function App() {


  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/create' element={< Signup/>}/>
      <Route path='/login1' element={< Login1/>}/>

    </Routes>
   
      
    </>
  )
}

export default App
