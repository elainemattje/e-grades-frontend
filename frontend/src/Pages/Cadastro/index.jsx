import React from 'react';

import './index.css';

function Cadastro() {
    return (
        <>
            {/* <div className="title-e-grades">e-Grades</div> */}
            <div className="main-dados">
                <div className="titulo-login">
                    e-Grades <div></div>
                </div>
                <p className="title">Cadastro de usuário</p>
                <br />
                <div className="input-groups-dados">
                    <div className="input-foto-perfil"></div>
                    <div className="bloco-input">
                        <div className="dados">
                            <div className="input">
                                <label htmlFor="nome">Nome:</label>
                                <input name="nome" type="text" />
                            </div>
                            <div className="input">
                                <label className="diminui" htmlFor="idade">Idade:</label>
                                <input className="diminui" name="email" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="cpf">CPF:</label>
                                <input name="cpf" type="text" />
                            </div>
                        </div>
                        <div className="dados">
                            <div className="input">
                                <label htmlFor="cidade">Cidade:</label>
                                <input name="cidade" type="text" />
                            </div>
                            <div className="input">
                                <label className="diminui" htmlFor="uf">UF:</label>
                                <input className="diminui" name="uf" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="escola">Escola:</label>
                                <input name="escola" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-groups-dados">
                    <div className="bloco-input">
                        <div className="dados">
                            <div className="input">
                                <label htmlFor="ano-escolar">Ano Escolar:</label>
                                <input name="ano-escolar" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="title">Cadastro de matéria</p>
                <br />
                <div className="input-groups-dados">
                    <div className="bloco-input">
                        <div className="dados">
                            <div className="input">
                                <label htmlFor="materia">Matéria:</label>
                                <input name="materia" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="diaSemana">dia da Semana:</label>
                                <input name="diaSemana" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="professor">Professor(a):</label>
                                <input name="professor" type="text" />
                            </div>
                        </div>
                        <div className="add">
                            <button className="add-btn"><span><p className="add-title">+</p></span></button>
                            <p className="add-description">adicionar matéria</p>
                        </div>
                    </div>
                </div>
                <div className="div-btn">
                    <button>Cadastrar</button>
                </div>
            </div>
        </>
    )
}

export default Cadastro;