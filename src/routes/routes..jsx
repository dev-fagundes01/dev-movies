import { Route, Routes } from 'react-router-dom'

import Detail from '../components/Detail'
import DefaultLayout from '../layout/DefaultLayout'
import Home from '../pages/home'
import Movies from '../pages/movies'
import Series from '../pages/series'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/Detalhes/:id" element={<Detail />}></Route>
      </Route>
    </Routes>
  )
}

export default Router
