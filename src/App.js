import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Error404 from "./pages/Error404"
import Nav from "./components/Nav"

const App = () => {
  return(
    <>
      <BrowserRouter>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App