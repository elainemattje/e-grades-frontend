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

    const onChangeCount = () => {
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
        console.log(e, 'e');
        setEscola(e.target.value);
    }

    const onChangeAnoEscolar = (e) => {
        setAnoEscolar(e.target.value);
    }

    const isSave = () => {

        let materia = document.getElementsByName('materia');

        for(let i = 0; i < materia.length; i++){
            if(materia[i].checked){
                api.post('materia', {
                    materia: materia[i].id
                }).then(() => {
                    console.log('success');
                }).catch(err => {
                    console.log(err);
                })
            }
        }

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
                            <button className="btnDadosAluno" onClick={isSave} style={{marginLeft: 470}}>Salvar</button>
                            </> 
                            :
                            <>
                            <div className="escolha-materia">
                                Escolha sua matéria :
                            </div>
                            <div>
                                <div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="português"/><div>Português</div>
                                    </div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="matematica"/><div>Matemática</div>
                                    </div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="geografia"/><div>Geografia</div>
                                    </div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="historia"/><div>História</div>
                                    </div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="fisica"/><div>Física</div>
                                    </div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="biologia"/><div>Biologia</div>
                                    </div>
                                    <div className="materias">
                                        <input type="checkbox" name="materia" id="Ed. Física"/><div>Ed. Física</div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btnDadosAluno" onClick={isSave} style={{marginLeft: 470}}>Salvar</button>
                                </div>
                            </div>
                            </>
                        }
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cadastro;