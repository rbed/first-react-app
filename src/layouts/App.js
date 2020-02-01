import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import Navigation from './Navigation'
import Footer from './Footer'

class App extends React.Component {
  render(){
      return(
          <Router>
              <div className="app">
                  <header>{<Header />}</header>
                  <main>
                      <aside>
                          {<Navigation />}
                      </aside>
                      <section className='page'>
                          {<Page />}
                      </section>
                  </main>
                  <footer>
                      {<Footer />}
                  </footer>
              </div>
          </Router>
      )
  }
}


export default App