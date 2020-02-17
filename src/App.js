import React from 'react';
import logo from './logo.svg';

import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home' 
import Portfolio from './components/Portfolio'
import About from './components/About';
import Skills from './components/Skills';
import Details from './components/Details'
import format from 'date-fns/format'
import { DiClojureAlt } from 'react-icons/di';
import { MdReorder, MdHome, MdLaptopWindows, MdLightbulbOutline } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: '',
      isClicked: true
    }
  }

  async handleDropdown () {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked})
    if(isClicked) {
      await this.setState({
        dropdown: "visible-dropdown"
      })
    } else {
      this.setState({
        dropdown: ""
      })
    } 
  }

  handleOutClick () {
    const { isClicked } = this.state;
    if(!isClicked) {
      this.setState({dropdown: "", isClicked: true})
    }
  }

  render() {
    const { dropdown } = this.state;
  return (
    <div className="App" onClick={this.handleOutClick.bind(this)}>
      <HashRouter>
      <nav className="navbar">
        <Link to='/'><img id="logo" src="./media/Logo.png" alt="Logo"/></Link>
        <div>
        <MdReorder id="menu" onClick={this.handleDropdown.bind(this)} />
          <div id={dropdown} className="dropdown-container" >
            <ul className="handheld-menu" onClick={this.handleDropdown.bind(this)}>
              <Link to="/"><li>Home</li><MdHome /></Link>
              <Link to='/portfolio'><li>Portfolio</li><MdLaptopWindows /></Link>
              <Link to='/skills'><li>Skills</li><MdLightbulbOutline /></Link>
              <Link to='/about'><li>About</li><IoMdInformationCircleOutline /></Link>
            </ul>

          </div>
        </div>
          <ul className="full-menu">
            <Link to="/"><li>Home</li></Link>
            <Link to='/portfolio'><li>Portfolio</li></Link>
            <Link to='/skills'><li>Skills</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
      </nav>
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/skills' component={Skills} />
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
}

export default App;
