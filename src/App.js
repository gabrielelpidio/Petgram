import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Loader } from './components/Loader'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
// import { Favs } from './pages/Favs'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' /> }
        {!isAuth && <Redirect noThrow from='/favs' to='/login' /> }
        {!isAuth && <Redirect noThrow from='/user' to='/login' /> }
        {isAuth && <Redirect noThrow from='/login' to='/' /> }
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
