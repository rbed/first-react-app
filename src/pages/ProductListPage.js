import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/ProductListPage.css'

const list = [
        {
            name: 'cars',
            path: '/cars'
        },
        {
            name: 'bikes',
            path: '/bikes'
        },
        {
            name: 'scooters',
            path: '/scooters'
        },
        {
            name: 'cycles',
            path: '/cycles'
    },
]

const ProductListPage = () => {
    
    const products = list.map(product => (<li key={product.name}><NavLink to={`/product/${product.name}`}>{product.name}</NavLink></li>))

    return (
        <div className='products'> 
            <h2>Lista produktów</h2>
            <ul>
                {products}
            </ul>
        </div>
     );
}
 
export default ProductListPage;