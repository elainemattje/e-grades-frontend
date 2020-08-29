import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
<<<<<<< HEAD
import Home from './Pages/Home';
=======
import InseriNota from './Pages/Cadastro';
import RecuperarSenha from './Pages/RecuperarSenha';
>>>>>>> c0bc9f1261058c264285e15c943a6ca29f79e865

function Router() {
    return (
        <BrowserRouter>
<<<<<<< HEAD
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro" exact component={Cadastro}/>
            <Route path="/home" exact component={Home}/>
=======
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/recuperarSenha" exact component={RecuperarSenha} />
>>>>>>> c0bc9f1261058c264285e15c943a6ca29f79e865
        </BrowserRouter>
    )
}

export default Router;