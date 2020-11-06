import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function RecuperarSenha() {
    return (
        <div className="box-login">
            <div className="titulo-login">
                e-Grades <div></div>
            </div>
            <p className="title">Recuperar senha</p>
            <p className="description">Ao fornecer o e-mail utilizado em seu cadastro enviaremos uma senha temporária, que deve ser redefinida no período de até 2 (duas) horas.</p>
            <br />
            <div className="input-groups">
                <div>
                    <label>E-mail</label>
                    <input></input>
                </div>
            </div>
            <div className="div-btn">
                <button>Enviar</button>
                <br />
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}

export default RecuperarSenha;