import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Home from './Pages/home'
import SignIn from './Pages/SignIn'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Header from './component/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App