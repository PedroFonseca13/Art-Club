import React from 'react'
import Home from './pages/Home'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Switch location={ location } key={ location.pathname }>
        <Route exact path="/" component={ Home } />
      </Switch>
    </AnimatePresence >
  )
}

export default App
