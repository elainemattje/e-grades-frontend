import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import InseriNota from './Pages/Cadastro';
import RecuperarSenha from './Pages/RecuperarSenha';

function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/recuperarSenha" exact component={RecuperarSenha} />
        </BrowserRouter>
    )
}

export default Router;