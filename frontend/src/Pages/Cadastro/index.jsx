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
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [uf, setUf] = useState('');
    const [escola, setEscola] = useState('');
    const [anoEscolar, setAnoEscolar] = useState('');
    const [count, setCount] = useState(1);
    const [inputs, setInput] = useState([{materia: '', professor: ''}]);

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

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value);
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

    const newMateria = () => {
        setInput([...inputs, {materia: '', professor: ''}]);
    }

    const isSave = () => {
        console.log(inputs);
        if(nome === '' || idade === '' || email === '' || senha === '' || uf === '' || escola === '' || anoEscolar === ''){
            swal.fire('Preencha todos os campos', '', 'error');
        } else if(!email.includes('@') || !email.includes('.')){
            swal.fire('Preencha o seu email corretamente', '', 'errr');
        } else if(senha.length < 6){
            swal.fire('Sua senha precisa ter no mínimo 6 digítos');
        } else {
            api.post('usuario', {
                nome,
                idade,
                email,
                senha,
                uf,
                escola,
                anoEscolar,
            }).then(() => {
                swal.fire('Cadastrado com sucesso', '', 'success');
            }).catch((err) => {
                swal.fire('Houve alguma problema no cadastro, tente novamente mais tarde', '', 'error');
                console.log(err);
            })
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
                                    <input value={idade} onChange={onChangeIdade} className="pequeno" type="number"/>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="email">E-mail:</label>
                                    <input value={email} onChange={onChangeEmail} type="text"/>
                                </div>
                            </div>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="anoEscolar">Senha:</label>
                                    <input value={senha} onChange={onChangeSenha} type="password"/>
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
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="anoEscolar">Ano Escolar:</label>
                                    <input value={anoEscolar} onChange={onChangeAnoEscolar} type="text"/>
                                </div>
                            </div>
                            </> 
                            :
                            <>
                            <div className="group-1">
                                <div className="input-groups tira-bottom">
                                    <label style={{marginRight: 140}} htmlFor="materia">Materia:</label>
                                </div>
                                <div className="input-groups tira-bottom">
                                    <label htmlFor="professor">Professor:</label>
                                </div>
                            </div>
                            {inputs.map(input => {
                                return(
                                    <>
                                    <input value={input.materia} style={{marginRight: 10, marginBottom: 15}}
                                    onChange={e => setInput('materia', e.target.value)}/>
                                    <input value={input.professor} style={{marginBottom: 15}} 
                                    onChange={e => setInput('professor', e.target.value)}/>
                                    </>
                                );
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