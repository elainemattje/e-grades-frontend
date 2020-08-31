import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

import './index.css';

function Header() {
    return (
        <>
            <div className="header">
                <div className="titulo-login">e-Grades</div>
                <div className="avatar">
                    <Link to="/cadastro"><button className="header-btn">Editar</button></Link>
                    <Link to="/"><button className="header-btn">Sair</button></Link>
                    <Avatar githubHandle="sitebase" size={60} round="50px" />
                </div>
            </div>
        </>
    )
}

export default Header;