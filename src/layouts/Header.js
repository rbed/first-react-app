import React from 'react';
import '../styles/Header.css'
import {Route, Switch } from 'react-router-dom'

import pic1 from '../img/bridge-header.jpg'
import pic2 from '../img/header-image-1-2.png'
import pic3 from '../img/pobrane.jpeg'

const Header = () => {
    return ( 
        <>
            <Switch>
                <Route path="/" exact render={() => (<img src={pic1} alt=''></img>)} />
                {/* UWAGA: powyżej zamiast dopasowania componentu do ścieżki, wywołuje od razu funkcję render */}
                <Route path="/products" render={() => (<img src={pic2} alt=''></img>)} />
                <Route path="/contact" render={() => (<img src={pic3} alt=''></img>)} />
                <Route path="/admin" render={() => (<img src={pic1} alt=''></img>)} />
                <Route render={() => (<img src={pic1} alt=''></img>)} />
            </Switch>
        </>
     );
}
 
export default Header;