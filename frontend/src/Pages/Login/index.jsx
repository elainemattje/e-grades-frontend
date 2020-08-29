import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Login() {

    return (
        <div className="box-login">
            <div className="titulo-login">
                e-Grades <div></div>
            </div>
            <div className="input-groups">
                <div>
                    <label>Usuário</label>
                    <input></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password"></input>
                </div>
            </div>
            <div className="div-btn">
                <button>Entrar</button>
                <br />
                <Link to="/cadastro">Criar conta</Link>
                <br />
                <Link to="/recuperarSenha">Recuperar senha</Link>
            </div>
        </div>
    )
}

export default Login;