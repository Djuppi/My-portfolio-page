import React from 'react';
import logo from './logo.svg';

import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home' 
import Portfolio from './components/Portfolio'
import About from './components/About';
import Details from './components/Details'
import format from 'date-fns/format'
import { DiClojureAlt } from 'react-icons/di'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <nav className="navbar">
        <Link to='/'><img id="logo" src="./media/Logo.png" alt="Logo"/></Link>
        
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to='/portfolio'><li>Portfolio</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
      </nav>
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/skills' component={Skills} /> */}
          <Route path='/about' component={About} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      
      <footer>
        <p>Find me at: </p>
        <a href="https://github.com/djuppi" target="blank"><img className="logo" src="./media/github.png"></img></a>
        <a href="https://www.linkedin.com/in/aske-djupnes-ammentorp-03434984/" target="blank"><img className="logo" src="./media/LinkedIn.png"></img></a>
        <p className="copyright">Copyright&copy; {format(new Date(Date.now()), 'yyyy')} Aske Djupnes Ammentorp <DiClojureAlt /> IT Consultant at Academic Work, Norway.</p>
      </footer>
      </HashRouter>
    </div>
  );
}

export default App;
