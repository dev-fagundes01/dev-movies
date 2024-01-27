import { Route, Routes } from 'react-router-dom'

import Detail from '../components/Detail'
import DefaultLayout from '../layout/DefaultLayout'
import Home from '../pages/home'
import Series from '../pages/series'
import Movies from '../pages/movies'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/movies' element={<Movies/>}/>
        <Route path="/series" element={<Series />} />
        <Route path="/Detalhes/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default Router
