import React, { Component } from 'react';
import swal from 'sweetalert2';

import './index.css';
import './media.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import api from '../../api/api';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            boletim: [],
            nota1: '',
            nota2: '',
            nota3: '',
            nota4: ''
        };
    }

    componentDidMount() {
        api.get('boletim')
            .then(response => {
                const dados = response.data;

                console.log(dados);

                var newBoletim = dados;
                var newNota1 = dados.nota1;
                var newNota2 = dados.nota2;
                var newNota3 = dados.nota3;
                var newNota4 = dados.nota4;

                this.setState({ boletim: newBoletim });
                this.setState({ nota1: newNota1 });
                this.setState({ nota2: newNota2 });
                this.setState({ nota3: newNota3 });
                this.setState({ nota4: newNota4 });
            })
            .catch(err => {
                console.log(err);
            })
    }

    inserirNota = (materia) => {

        this.state.boletim.map(nota => {
            if (nota.materia === materia) {

                swal.fire({
                    html: `
                        <div id="title" class="title-alert">A matéria escolhida foi <div style="textTransform: uppercase" id="materia">${materia}</div></div>
                        <div style="display: flex; justify-content: center;">
                            <div style="margin: 0 5px">
                                <div class="label-div">N1:</div>
                                <input style="width: 40px" id="nota1" value=${nota.nota1} class="input-alert"/>
                            </div>
                            <div style="margin: 0 5px">
                                <div class="label-div">N2:</div>
                                <input style="width: 40px" id="nota2" value=${nota.nota2} class="input-alert"/>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: center;">
                            <div style="margin: 0 5px">
                                <div class="label-div">N3:</div>
                                <input style="width: 40px" id="nota3" value=${nota.nota3} class="input-alert"/>
                            </div>
                            <div style="margin: 0 5px">
                                <div class="label-div">N4:</div>
                                <input style="width: 40px" id="nota4" value=${nota.nota4} class="input-alert"/>
                            </div>
                        </div>
                    `,
                    confirmButtonText: '<div id="isSave">Salvar</div>',
                    closeOnConfirm: false
                }).then(() => {

                    let nota1 = document.getElementById('nota1');
                    let nota2 = document.getElementById('nota2');
                    let nota3 = document.getElementById('nota3');
                    let nota4 = document.getElementById('nota4');

                    api.post('editNote', {
                        materia: materia,
                        nota1: nota1.value,
                        nota2: nota2.value,
                        nota3: nota3.value,
                        nota4: nota4.value
                    }).then(() => {
                        window.location.reload();
                    }).catch(err => {
                        console.log(err);
                    })

                });

            }
        });
    }

    inserirMateria = (materia) => {

        this.state.boletim.map(nota => {
            if (nota.materia === materia) {

                swal.fire({
                    html: `
                        <div id="title" class="title-alert">A matéria escolhida foi <div style="textTransform: uppercase" id="materia">${materia}</div></div>
                        <div style="display: flex; justify-content: center;">
                            <div style="margin: 0 5px">
                                <div class="label-div">Número de faltas:</div>
                                <input id="falta" value=${nota.faltas} class="input-alert"/>
                            </div>
                        </div>
                    `,
                    confirmButtonText: '<div id="isSave">Salvar</div>',
                    closeOnConfirm: false
                }).then(() => {

                    let falta = document.getElementById('falta');

                    api.post('editFaltas', {
                        materia: materia,
                        falta: falta.value
                    }).then(() => {
                        window.location.reload();
                    }).catch(err => {
                        console.log(err);
                    })

                });

            }
        });
    }

    render() {
        return (
            <>
                <Header />
                <div className="main-home">
                    <div className="box-notas-home">
                        <div className="cabecalho">
                            <div className="line">
                                <div style={{ color: 'white' }} className="title">Matéria</div>
                                <div style={{ color: 'white' }} className="title meio">Média</div>
                                <div style={{ color: 'white' }} className="title">Faltas</div>
                            </div>
                        </div>
                        {this.state.boletim.map(dado => {
                            return (
                                <>
                                    <div key={dado.materia} className="notes">
                                        <div className='line'> <div className={dado.media > 6 ? 'acima' : dado.media === 6 ? 'medio' : 'baixo'}></div> <div style={{ textTransform: 'uppercase' }}>{dado.materia}</div></div>
                                        <div className="line meio">
                                            {dado.media}
                                            <div onClick={() => this.inserirNota(dado.materia)} className="plus">+</div>
                                        </div>
                                        <div className="line">
                                            {dado.faltas}
                                            <div onClick={() => this.inserirMateria(dado.materia)} className="plus">+</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div style={{ width: '45%' }} className="legenda">
                        <div className="informacao">
                            <div className="acima"></div> <div>Nota acima da média.</div>
                        </div>
                        <div className="informacao">
                            <div className="baixo"></div> <div>Nota a baixo da média.</div>
                        </div>
                        <div className="informacao">
                            <div className="medio"></div> <div>Nota no limite.</div>
                        </div>
                    </div>

                </div>
                <Footer />
            </>
        )
    }
}

export default Home;