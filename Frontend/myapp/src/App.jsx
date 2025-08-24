import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Signup } from './pages/Signup'
import { Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login1 } from './pages/login1'
import { Login2 } from './pages/Login2'
import { Login3 } from './pages/Login3'
import { Laptop } from './pages/laptopList/Laptop'
import { Desktop } from './pages/desktopList/desktop'
import { Printer } from './pages/printerList/printer'
import { Monitor } from './pages/monitorList/Monitor'
import { CarePack } from './pages/carePackList/CarePack'
import { Sale } from './pages/saleField/Sale'
import { Support } from './pages/techSupport/Support'
import { Accessories } from './pages/accessoriesList/Accessories'
function App() {
return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/create' element={< Signup/>}/>
      <Route path='/login1' element={< Login1/>}/>
      <Route path='/login2' element={< Login2/>}/>
      <Route path='/login3' element={< Login3/>}/>
      <Route  path='/laptops' element={< Laptop/>}/>
      <Route path='/printers' element={< Printer/>}/>
      <Route path='/desktops' element={< Desktop/>}/>
      <Route path='/monitors' element={< Monitor/>}/>
      <Route path='//accesories' element={< Accessories/>}/>
      <Route path='/care' element={< CarePack/>}/>
      <Route path='/sale' element={< Sale/>}/>
      <Route path='/support' element={< Support/>}/>
      



    </Routes>
   
      
    </>
  )
}

export default App
