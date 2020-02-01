import React from 'react';
import './App1.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
// importujemy komponenty z biblioeki

// tworzymy komponenty
const Home = () => (<h1>Strona startowa</h1>)
const News = () => (<h1>News</h1>)
const Contact = () => (<h1>Contact</h1>)
const ErrorPage = () => (<h1>Error</h1>)

class App extends React.Component {
  render(){
    return(
      <Router>
      <nav>
        <ul>
          {/* <li><a href="/"></a></li>
          <li><a href="/news"></a></li>
          <li><a href="/contact"></a></li> */}
          {/* dodanie słowa exact spowoduje, ze klasa active będize nadawan jedynie ściśle dopasowanemu urlowi */}
          {/* można też samemu definiować klasę aktywnosci przez activeClassName="" */}
          <li><NavLink exact to="/">strona glowna</NavLink></li>
          <li><NavLink to="/news">news</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
      </nav>
      <section>
        {/* jako parametry w komponentach przekazujemy informacje kiedy mają sie wyświetlać */}
        {/* jeżeli ścieżka to "/contact" wyświetl komponent Contact */}
        {/* dodanie do Route słowa exact (a własciwie exact={true}) powoduje, że komponent wyświetla się dla 
ścieżki dokładnie takiej jak wskazana.  */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/contact" component={Contact}/>
            <Route component={ErrorPage}/>
          </ Switch>
          {/* do obsłużenia błędnej ścieżki korzystamy z pewnej opcji switcha */}
          {/* switch wykona pierwsze co pasuje do określonej ścieżki, jeżeli nic nie pasuje wykona ostatni  */}
      </section>
      </Router>
    )
  }
}

export default App