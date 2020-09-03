import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

import './index.css';
import Logo from '../../assets/logo-e-grades.png';

function Header() {
    return (
        <>
            <div className="header">
                <div className="titulo-login header-titulo">e-Grades</div>
                <div className="avatar">
                    <Avatar githubHandle="sitebase" size={60} round="50px" />
                    <Link to="/cadastro"><button className="header-btn">Editar</button></Link>
                    <Link to="/"><button className="header-btn">Sair</button></Link>
                </div>
            </div>
        </>
    )
}

export default Header;