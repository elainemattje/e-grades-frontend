import React from 'react';

import './index.css';

function dadosAluno(){
    return (
        <>  
        <div className="input-groups-dados">
            <div className="input-foto-perfil"></div>
            <div className="dados">
                <div className="input">
                    <label htmlFor="nome">Nome:</label>
                    <input name="nome" type="text"/>
                </div>
                <div className="input">
                    <label htmlFor="idade">Email:</label>
                    <input name="email" type="text"/>
                </div>
            </div>
        </div>
        <div className="input-groups-dados">
            <div className="dados">
                <div className="input">
                    <label htmlFor="idade">Idade:</label>
                    <input className="input-idade" name="idade" type="text"/>
                </div>
                <div className="input">
                    <label htmlFor="idade">Email:</label>
                    <input name="email" type="text"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default dadosAluno;