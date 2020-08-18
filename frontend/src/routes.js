import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';

function Router(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
        </BrowserRouter>
    )
}

export default Router;