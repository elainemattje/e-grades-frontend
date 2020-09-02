import React from 'react';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';

import './index.css';
import Header from '../../Components/Header';

function Home() {

    const dados = [
        {materia: 'Português', media: 8, faltas: 4},
        {materia: 'Matemática', media: 5, faltas: 4},
        {materia: 'Física', media: 6, faltas: 4},
        {materia: 'Biologia', media: 7, faltas: 4},
        {materia: 'Química', media: 10, faltas: 4},
        {materia: 'Artes', media: 6.5, faltas: 4},
        {materia: 'Geografia', media: 4, faltas: 4},
        {materia: 'História', media: 9, faltas: 4},
        {materia: 'Ed. Física', media: 8.5, faltas: 4},
    ]

    return (
        <>
            <Header />
            <div className="main-home">
                
                <div className="box-notas-home">
                    <div className="cabecalho">
                        <div className="line">
                            <div className="title">Matéria</div>
                            <div className="title meio">Média</div>
                            <div className="title">Faltas</div>
                        </div>
                    </div>
                    {dados.map(dado => {
                        return(
                            <>
                            <div key={dado.materia} className="notes">
                                <div style={{marginLeft: 10}} className='line'> <div className={dado.media > 6 ? 'acima' : 'baixo'}></div> <div>{dado.materia}</div></div>
                                <div className="line meio">{dado.media}</div>
                                <div className="line">{dado.faltas}</div>
                            </div>
                            </>
                        )
                    })}
                </div>

                <div style={{width: '45%'}} className="legenda">
                    <div className="informacao">
                        <div className="acima"></div> <div>Nota acima da média.</div>
                    </div>
                    <div className="informacao">
                        <div className="baixo"></div> <div>Nota a baixo da média.</div>
                    </div>
                </div>
                  
            </div>
            <div className="footer">
                <div className="infos">
                    <div className="info">
                        USJ
                    </div>
                    <div className="info">
                        São José, SC
                    </div>
                    <div className="info">
                        (48) 3456-5687
                    </div>
                </div>
                <hr/>
                <div className="infos">
                    <div className="info2">
                        Desenvolvido por:
                    </div>
                    <div className="info2">
                        Diego Sousa, Elaine Mattje
                    </div>
                    <div className="info2">
                        Jessica Gerente, Julia Navegantes
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;