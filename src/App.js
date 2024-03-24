import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import About from './components/About'

import Contact from './components/Contact'

import NotFound from './components/NotFound'

import Header from './components/Header'

import './App.css'

const App = () => {
  ;<div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
}

export default App
