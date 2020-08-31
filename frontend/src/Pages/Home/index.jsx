import React from 'react';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';

import './index.css';
import Header from '../../Components/Header';

function Home() {
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
                <div className="home-content">
                    <div className="materia">Português</div>
                    <div className="btn-add">
                        <Link to="/notas"><button className="add-btn"><span><p className="add-title">+</p></span></button></Link>
                    </div>
                    <div>09</div>
                    <div>02</div>
                </div>
                <div className="home-content">
                    <div className="materia">Matemática</div>
                    <div className="btn-add">
                        <Link to="/notas"><button className="add-btn"><span><p className="add-title">+</p></span></button></Link>
                    </div>
                    <div>10</div>
                    <div>12</div>
                </div>
                <div className="home-content">
                    <div className="materia">Biologia</div>
                    <div className="btn-add">
                        <Link to="/notas"><button className="add-btn"><span><p className="add-title">+</p></span></button></Link>
                    </div>
                    <div>07</div>
                    <div>04</div>
                </div>
                <br />
                <br />
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