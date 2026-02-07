import './App.css'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
