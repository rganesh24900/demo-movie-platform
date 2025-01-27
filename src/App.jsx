import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Movies from './Movies'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Movies/>}/>
      </Routes>
    </>
  )
}

export default App
