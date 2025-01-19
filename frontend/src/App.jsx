import Create from './Pages/Create.jsx'
import Home from './Pages/Home.jsx'
import Navigation from './Components/Navigation.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </>
  )
}

export default App
