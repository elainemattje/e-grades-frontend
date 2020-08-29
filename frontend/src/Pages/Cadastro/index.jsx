import React, { useState } from 'react';
import swal from 'sweetalert2';
import NumberFormat from 'react-number-format';

import './index.css';

function Cadastro() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [escola, setEscola] = useState('');
    const [anoEscolar, setAnoEscolar] = useState('');
    const [materia, setMateira] = useState('');
    const [diaSemana, setDiaSemana] = useState('');
    const [professor, setProfessor] = useState('');

    const onChangeNome = (e) => {
        setNome(e.target.value);
    }

    const onChangeIdade = (e) => {
        setIdade(e.target.value);
    }

    const onChangeCpf = (e) => {
        setCpf(e.target.value);
    }

    const onChangeUf = (e) => {
        setUf(e.target.value);
    }

    const onChangeCidade = (e) => {
        setCidade(e.target.value);
    }

    const onChangeEscola = (e) => {
        setEscola(e.target.value);
    }

    const onChangeAnoEscolar = (e) => {
        setAnoEscolar(e.target.value);
    }

    const onChangeMateria = (e) => {
        setMateira(e.target.value);
    }

    const onChangeDiaSemana = (e) => {
        setDiaSemana(e.target.value);
    }

    const onChangeProfessor = (e) => {
        setProfessor(e.target.value);
    }

    const isSalva = () => {
        if(nome === '' || idade === '' || cpf === '' || cidade === '' || uf === '' || escola === '' || anoEscolar === '' || materia === '' || diaSemana === '' || professor === ''){
            swal.fire('Preencha todos os campos', '', 'error');
        } 
    }

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
                                <input onChange={onChangeNome} name="nome" type="text" />
                            </div>
                            <div className="input">
                                <label className="diminui" htmlFor="idade">Idade:</label>
                                <input type="number" onChange={onChangeIdade} className="diminui" name="email" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="cpf">CPF:</label>
                                <NumberFormat format="###.###.###-##" onChange={onChangeCpf} name="cpf" type="text" />
                            </div>
                        </div>
                        <div className="dados">
                            <div className="input">
                                <label htmlFor="cidade">Cidade:</label>
                                <input onChange={onChangeCidade} name="cidade" type="text" />
                            </div>
                            <div className="input">
                                <label className="diminui" htmlFor="uf">UF:</label>
                                <input onChange={onChangeUf} className="diminui" name="uf" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="escola">Escola:</label>
                                <input onChange={onChangeEscola} name="escola" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-groups-dados">
                    <div className="bloco-input">
                        <div className="dados">
                            <div className="input">
                                <label htmlFor="ano-escolar">Ano Escolar:</label>
                                <input onChange={onChangeAnoEscolar} name="ano-escolar" type="text" />
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
                                <input onChange={onChangeMateria} name="materia" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="diaSemana">dia da Semana:</label>
                                <input onChange={onChangeDiaSemana} name="diaSemana" type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="professor">Professor(a):</label>
                                <input onChange={onChangeProfessor} name="professor" type="text" />
                            </div>
                        </div>
                        <div className="add">
                            <button className="add-btn"><span><p className="add-title">+</p></span></button>
                            <p className="add-description">adicionar matéria</p>
                        </div>
                    </div>
                </div>
                <div className="div-btn">
                    <button onClick={isSalva}>Cadastrar</button>
                </div>
            </div>
        </>
    )
}

export default Cadastro;