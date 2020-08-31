import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Notas() {
    return (
        <div className="box-notas">
            <div className="titulo-login">
                e-Grades <div></div>
            </div>
            <p className="title">Inclusão de notas</p>
            <br />
            <div className="input-notas">
                <div className="notas">
                    <label className="nota-label">Avaliação 1</label>
                    <br />
                    <br />
                    <div>
                        <label className="nota-label">Nota</label>
                        <input className="nota"></input>
                        <br />
                        <label className="nota-label">Peso</label>
                        <input className="nota"></input>
                    </div>
                </div>
                <div className="notas">
                    <label className="nota-label">Avaliação 2</label>
                    <br />
                    <br />
                    <div>
                        <label className="nota-label">Nota</label>
                        <input className="nota"></input>
                        <br />
                        <label className="nota-label">Peso</label>
                        <input className="nota"></input>
                    </div>
                </div>
                <div className="notas">
                    <label className="nota-label">Avaliação 3</label>
                    <br />
                    <br />
                    <div>
                        <label className="nota-label">Nota</label>
                        <input className="nota"></input>
                        <br />
                        <label className="nota-label">Peso</label>
                        <input className="nota"></input>
                    </div>
                </div>
                <div className="notas">
                    <label className="nota-label">Avaliação 4</label>
                    <br />
                    <br />
                    <div>
                        <label className="nota-label">Nota</label>
                        <input className="nota"></input>
                        <br />
                        <label className="nota-label">Peso</label>
                        <input className="nota"></input>
                    </div>
                </div>
                <div className="notas">
                    <label className="nota-label">Avaliação 5</label>
                    <br />
                    <br />
                    <div>
                        <label className="nota-label">Nota</label>
                        <input className="nota"></input>
                        <br />
                        <label className="nota-label">Peso</label>
                        <input className="nota"></input>
                    </div>
                </div>
            </div>
            <div className="div-btn">
                <button>Salvar</button>
                <br />
                <Link to="/home">Voltar</Link>
            </div>
        </div>
    )
}

export default Notas;