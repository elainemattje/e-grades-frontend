import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home';

function Router(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro" exact component={Cadastro}/>
            <Route path="/home" exact component={Home}/>
        </BrowserRouter>
    )
}

export default Router;