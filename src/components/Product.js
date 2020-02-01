import React from 'react';
import {Link} from 'react-router-dom'

const Product = (props) => {
    return ( 
    <div>
        <h2>Produkt {props.id}</h2>
        <Link to='/products'>Powrót do listy produktów</Link>
    </div> 
    );
}
 
export default Product;