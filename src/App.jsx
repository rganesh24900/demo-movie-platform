import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Movies from './Movies'
import MovieDetails from './MovieDetails'

function App() {

  return (
    <>
      <Navbar/>
      <div className='pt-22'>
      <Routes>
        <Route index path='/' element={<Movies/>}/>
        <Route index path='/movie-details/:movieId' element={<MovieDetails/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
