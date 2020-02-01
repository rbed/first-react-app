import React from 'react'
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    {name: 'start', path: '/', exact:'true'},
    {name: 'produkty', path: '/products'},
    {name: 'kontakt', path: '/contact'},
    {name: 'panel admin', path: '/admin'},
]


const Navigation = () => {
    const menu = list.map(item => <li key='name'><NavLink to={item.path} exact={item.exact ? true : false}>{item.name}</NavLink></li>)
    return ( 
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;