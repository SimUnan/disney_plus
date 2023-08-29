import './App.css'
import Footer from './components/Footer'
import GenreMovieList from './components/GenreMovieList'
import Header from './components/Header'
import ProductionHouse from './components/ProductionHouse'
import Slider from './components/Slider'

function App() {

  return (
    <div className='w-screen h-full bg-[#131520]'>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <Footer />
    </div>
  )
}

export default App
