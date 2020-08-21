import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

function Router(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro" exact component={Cadastro}/>
        </BrowserRouter>
    )
}

export default Router;