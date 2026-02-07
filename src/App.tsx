import './App.css'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/about-me' element={<AboutPage/>}/>
        <Route path='/experience' element={<ExperiencePage/>}/>
        <Route path="*" element={"404 Not Found"} />
      </Route>
    </Routes>
  )
}

export default App
