import React from 'react'
import Product from '../components/Product'

const ProductPage = (props) => {
    // console.log(props.match)
    return ( 
        <div>
            <Product id={props.match.params.id}/> 
            {/* w propsach mam dostęp do specjalnego obiektu który przechowuje info o obecnie wyswietlanej stornie
            obiekt ten jest generowany przez component ROUTE */}
        </div>
     );
}
 
export default ProductPage;