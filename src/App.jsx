import HomePage from './pages/Home'
import RafflePage from './pages/RafflePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/raffle' element={<RafflePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App