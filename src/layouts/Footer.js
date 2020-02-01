import React from 'react'
import {Route, Switch} from 'react-router-dom';


const Footer = (props) => {
    console.log(props);
    return ( 
        <div>
            <h2>stopka</h2>
            {/* Route jest robiony po to, zeby pojawił się obiekt z history, match, location itd */}
            <Switch>
                <Route path='/' exact render={(props)=>{
                    console.log(props)
                    return(
                        <>
                        <p>jesteś na stronie głównej</p>
                        <p>jesteś na urlu {props.location.pathname}</p>
                        </>
                    )
                }}/>

                <Route path='/:page' exact render={(props)=>{
                    console.log(props)
                    return(
                        <>
                            <p>jesteś na stronie {props.match.params.page}</p>
                            <p>jesteś na urlu {props.location.pathname}</p>
                        </>
                    )
                }}/>

                <Route path='/:page/:sub' exact render={(props)=>{
                    console.log(props)
                    return(
                        <>
                            <p>jesteś na stronie {props.match.params.sub}</p>
                            <p>jesteś na urlu {props.location.pathname}</p>
                        </>
                    )
                }}/>
            </Switch>
        </div>
     );
}
 
export default Footer;