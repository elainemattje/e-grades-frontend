import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

import './index.css';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value);
    }

    const isLogin = () =>{
        console.log('EEE');
        if(email === '' || senha === ''){
            swal.fire('Preencha todos os campos', '', 'error')
        } else if(!email.includes('@') && !email.includes('.')){
            swal.fire('Preencha o seu e-mail corretamente', '', 'error');
        } else {
            swal.fire('Cadastro realizado com sucesso', '', 'success');
        }
    }

    return (
        <div className="box-login">
            <div className="titulo-login">
                e-Grades <div></div>
            </div>
            <div className="input-groups">
                <div>
                    <label>E-mail</label>
                    <input value={email} onChange={onChangeEmail}></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input onChange={onChangeSenha} value={senha} type="password"></input>
                </div>
            </div>
            <div className="div-btn">
                <Link to="/home"><button>Entrar</button></Link>
                <button onClick={isLogin}>Entrar</button>
                <br />
                <Link to="/cadastro">Criar conta</Link>
                <br />
                <Link to="/recuperarSenha">Recuperar senha</Link>
            </div>
        </div>
    )
}

export default Login;