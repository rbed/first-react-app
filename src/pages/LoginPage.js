import React from 'react'

const LoginPage = () => {
    return ( 
        <form>
            <input type="text" name='login' placeholder='wpisz login'/><br/>
            <input type="password" name='password' placeholder='wpisz hasło'/><br/>
            <button>Kliknij</button>
        </form>
     );
}
 
export default LoginPage;