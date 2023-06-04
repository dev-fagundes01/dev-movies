import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default DefaultLayout
