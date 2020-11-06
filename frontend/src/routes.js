import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import RecuperarSenha from './Pages/RecuperarSenha';
import Home from './Pages/Home';

function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/recuperarSenha" exact component={RecuperarSenha} />
            <Route path="/home" exact component={Home} />
        </BrowserRouter>
    )
}

export default Router;