import React from 'react';

import Aluno from '../../Components/Cadastro/DadosAluno';
import './index.css';

function Cadastro(){
    return(
        <>
        <div className="title-e-grades">e-Grades</div>
        <div className="main-dados">
            <Aluno/>
        </div>
        </>
    )
}

export default Cadastro;