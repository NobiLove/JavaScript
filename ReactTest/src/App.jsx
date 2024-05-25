import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Brands from './pages/Brands'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'

function App () {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Brands' element={<Brands />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
