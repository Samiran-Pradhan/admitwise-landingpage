import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import Services from './component/Services.jsx'
import Partners from './component/Partners.jsx'
import About from './component/About.jsx'
import Testimonial from './component/Testimonial.jsx'
import MyFooter from './component/MyFooter.jsx'
import Soumik from './component/Soumik.jsx'
import SignUp from './component/SignUp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import LogIn from './component/LogIn.jsx'
import Main from './component/Main.jsx'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>

          <Route path='/register' element={<SignUp/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/*' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
