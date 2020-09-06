import React, { useState } from 'react';
import swal from 'sweetalert2';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import './index.css';

function Cadastro(props) {

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
    const [count, setCount] = useState(1);
    const [table, setTable] = useState(1);

    const onChangeCount = (e) => {
        if(count === 1){
            setCount(2);
        } else {
            setCount(1);
        }
    }

    const onChangeNome = (e) => {
        setNome(e.target.value);
    }

    const onChangeIdade = (e) => {
        setIdade(e.target.value);
    }

    const onChangeCpf = (e) => {
        setCpf(e.target.value);
    }

    const onChangeCidade = (e) => {
        setCidade(e.target.value);
    }

    const onChangeUf = (e) => {
        setUf(e.target.value);
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

    const onChangeProfessor = (e) => {
        setProfessor(e.target.value);
    }

    let dadosAluno = [];

    const isSave = () =>{
        if(nome === '' || idade === '' || cpf === '' || cidade === '' || uf === '' || escola === '' || anoEscolar === '' || materia === '' || professor === ''){
            swal.fire('Preencha todos os campos', '', 'error');
        } else {
            dadosAluno.push(nome, idade, cpf, cidade, uf, escola, anoEscolar, materia, professor);
        }

        console.log(dadosAluno);
    }

    const onChangeTable = () =>{
        setTable(2);
    }

    return (
        <>
            <Header/>
            <div className="main-perfil">
                <div className="botoes">
                    <div onClick={onChangeCount} className={count === 1 ? 'aba border-top' : 'aba'}>
                        Seus Dados
                    </div>
                    <div onClick={onChangeCount} className={count === 1 ? 'aba' : 'aba border-top'}>
                        Notas
                    </div>
                </div>
                    <div className="div-crud">
                        {count === 1 ? 
                            <>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="nome">Nome:</label>
                                    <input onChange={onChangeNome} type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="Idade">Idade:</label>
                                    <input onChange={onChangeIdade} className="pequeno" type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="cpf">CPF:</label>
                                    <NumberFormat format="###.###.###-##" onChange={onChangeCpf} type="text"/>
                                </div>
                            </div>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="cidade">Cidade:</label>
                                    <input onChange={onChangeCidade} type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="uf">UF:</label>
                                    <input onChange={onChangeUf} className="pequeno" type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="escola">Escola:</label>
                                    <input onChange={onChangeEscola} type="text"/>
                                </div>
                            </div>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="anoEscolar">Ano Escolar:</label>
                                    <input onChange={onChangeAnoEscolar} className="pequeno" type="text"/>
                                </div>
                            </div>
                            </> 
                            :
                            <>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="materia">Materia:</label>
                                    <input onChange={onChangeMateria} type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="professor">Professor:</label>
                                    <input onChange={onChangeProfessor} type="text"/>
                                </div>
                            </div>
                            <Button onClick={onChangeTable} style={{marginLeft: 10, fontSize: 15, fontFamily: 'Ubuntu', width: 200}} variant="contained" color="default" disableElevation>
                                Adicionar Materia
                            </Button>
                            {table === 1 ? '' :
                            <>
                            <div style={{maxHeight: 120, height: '100%'}} className="table-notas">
                                <div className="header-table">
                                    <div className="column-table">
                                        Matéria
                                    </div>
                                    <div className="column-table">
                                        Professor
                                    </div>
                                </div>
                                <div className="header-table">
                                    <div className="column-table">
                                        {}
                                    </div>
                                    <div className="column-table">
                                        {}
                                    </div>
                                </div>
                            </div>
                            </>
                            }
                            <button onClick={isSave} style={{marginLeft: 470}}>Salvar</button>
                            </>
                        }
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cadastro;