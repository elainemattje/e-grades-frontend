import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

import './index.css';
import { useState } from 'react';
import Logo from '../../assets/logo.jpeg';

function Header() {

    const [retornaUser, setRetornaUser] = useState();

    const HeaderUser = () => {
        let url = window.location.href;
        let cortaUrl = url.split('/');
        cortaUrl.map(item => {
           if(item !== 'cadastro'){
                setRetornaUser(1);
           } else {
                setRetornaUser(2);
           }
    })
    }

    window.onload = HeaderUser;

    return (
        <>
            <div className="header">
                <div className="titulo-login header-titulo">e-Grades</div>
                {retornaUser === 1 ? 
                    <div className="avatar">
                        <Avatar githubHandle="sitebase" size={60} round="50px" />
                        <Link to="/cadastro"><button className="header-btn">Editar</button></Link>
                        <Link to="/"><button className="header-btn">Sair</button></Link>
                    </div>
                :
                    ''
                }
                
            </div>
        </>
    )
}

export default Header;