import React from 'react';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';

import './index.css';
import Header from '../../Components/Header';

function Home() {

    const dados = [
        {materia: 'Português', media: 8, faltas: 4},
        {materia: 'Português', media: 8, faltas: 4},
    ]

    return (
        <>

            <Header />
            <div className="home">
                <div className="home-title">
                    <div className="materia">Matéria</div>
                    <div className="space"></div>
                    <div>Média</div>
                    <div>Faltas</div>
                </div>
                {dados.map(dado => {
                    return(
                    <div className="home-content">
                        <div className="materia">{dado.materia}</div>
                        <div className="btn-add">
                            <Link to="/notas"><button className="add-btn"><span><p className="add-title">+</p></span></button></Link>
                        </div>
                        <div>{dado.media}</div>
                        <div>{dado.faltas}</div>
                    </div>
                )
                })}
                <br/>
                <br/>
            </div>
            <footer className="footer">
                <div>
                    <div>2020</div>
                    <div>Centro Universitário Municipal de São José - USJ</div>
                    <div>Disciplina: Projeto Integrador II</div>
                    <div>Professor: Osmar da Cunha Filho</div>
                </div>
                <br />
                <div>
                    <div>Desenvolvido por:</div>
                    <div>Diego Amorim de Sousa</div>
                    <div>Elaine Mattje</div>
                    <div>Jéssica Gerente</div>
                    <div>Júlia Navegantes
                </div>

                </div>
            </footer>
        </>
    )
}

export default Home;