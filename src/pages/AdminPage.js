import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const permistion = true;

const AdminPage = () => {
    return ( 
        <Route render={() => (permistion ? (<h3>panel admina</h3>) : (<Redirect to='/login' />))} />
     );
}
 
export default AdminPage;