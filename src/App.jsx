import './App.css'
import SignUp from './component/SignUp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import LogIn from './component/LogIn.jsx'
import Main from './component/Main.jsx'
import {ChatBot} from './component/Chatbot/Chatbot.jsx'

export const baseurl="http://localhost:8080/"

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
      <ChatBot/>
    </>
  )
}

export default App
