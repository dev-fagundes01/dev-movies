import { Route, Routes } from 'react-router-dom'

import DefaultLayout from '../layout/DefaultLayout'
import Home from '../pages/home'
import Movies from '../pages/movies'
import Series from '../pages/series'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/Series" element={<Series />}></Route>
      </Route>
    </Routes>
  )
}

export default Router
