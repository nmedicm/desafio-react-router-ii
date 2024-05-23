import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import PokemonDetail from './views/PokemonDetail'

const App = () => {
  return(
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pokemones' element ={<Pokemones/>} />
      <Route path='/pokemon/:name' element={<PokemonDetail/>} />

    </Routes>
    </>
  )
}

export default App
