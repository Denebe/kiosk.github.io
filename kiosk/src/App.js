import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
import GlobalStyle from './globalStyle'
import Engine from './pages/Engine/Engine'
import Home from './pages/HomePage/Home'
import Introduce from './pages/Introduce/Introduce'
import Kiosk from './pages/Kiosk/Kiosk'
import Program from './pages/Program/Program'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kiosk"  component={Kiosk} />
        <Route path="/engine"  component={Engine} />
        <Route path="/program" component={Program} />
        <Route path="/introduce" component={Introduce} />
      </Switch>

    </Router>
  )
}

export default App
