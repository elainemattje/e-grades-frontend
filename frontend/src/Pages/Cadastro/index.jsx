import React, { useState } from 'react';
import swal from 'sweetalert2';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import api from '../../api/api';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import './index.css';

function Cadastro(props) {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [escola, setEscola] = useState('');
    const [anoEscolar, setAnoEscolar] = useState('');
    const [materia, setMateira] = useState('');
    const [professor, setProfessor] = useState('');
    const [count, setCount] = useState(1);
    const [inputs, setInput] = useState([{value: ''}]);

    const onChangeCount = () => {
        if(count === 1){
            setCount(2);
        } else {
            setCount(1);
        }
    }

    const onChangeNome = (e) => {
        setNome(e.target.value);
        console.log(e.target.value);
    }

    const onChangeIdade = (e) => {
        setIdade(e.target.value);
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

    const newMateria = () => {
        setInput([inputs, {value: ''}]);
    }

    const isSave = () => {
        if(nome === '' || idade === '' || cidade === '' || uf === '' || escola === '' || anoEscolar === '' || materia === '' || professor === ''){
            swal.fire('Preencha todos os campos', '', 'error');
        } else {
            
        }
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
                        Matéria
                    </div>
                </div>
                    <div className="div-crud">
                        {count === 1 ? 
                            <>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="nome">Nome:</label>
                                    <input value={nome} onChange={onChangeNome} type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="Idade">Idade:</label>
                                    <input value={idade} onChange={onChangeIdade} className="pequeno" type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="cidade">Cidade:</label>
                                    <input value={cidade} onChange={onChangeCidade} type="text"/>
                                </div>
                            </div>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="anoEscolar">Ano Escolar:</label>
                                    <input value={anoEscolar} onChange={onChangeAnoEscolar} type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="uf">UF:</label>
                                    <input value={uf} onChange={onChangeUf} className="pequeno" type="text"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="escola">Escola:</label>
                                    <input value={escola} onChange={onChangeEscola} type="text"/>
                                </div>
                            </div>
                            </> 
                            :
                            <>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="materia">Materia:</label>
                                    {/* <input value={materia} onChange={onChangeMateria} type="text"/> */}
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="professor">Professor:</label>
                                    {/* <input value={professor} onChange={onChangeProfessor} type="text"/> */}
                                </div>
                            </div>
                            {inputs.map(input => {
                                return(
                                    <>
                                    <input onChange={onChangeMateria}/>
                                    <input onChange={onChangeProfessor}/>
                                    </>
                                )
                            })}
                            <Button onClick={newMateria} style={{marginLeft: 10, fontSize: 15, fontFamily: 'Ubuntu', width: 200}} variant="contained" color="default" disableElevation>
                                Adicionar Materia
                            </Button>
                            
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