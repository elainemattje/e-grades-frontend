import React, { Component } from 'react';
import swal from 'sweetalert2';

import './index.css';
import Header from '../../Components/Header';

class Home extends Component {

    dados = [
        {materia: 'Português', media: 8, faltas: 4},
        {materia: 'Matemática', media: 5, faltas: 4},
        {materia: 'Física', media: 6, faltas: 4},
        {materia: 'Biologia', media: 7, faltas: 4},
        {materia: 'Química', media: 10, faltas: 4},
        {materia: 'Artes', media: 6.5, faltas: 4},
        {materia: 'Geografia', media: 4, faltas: 4},
        {materia: 'História', media: 9, faltas: 4},
        {materia: 'Ed. Física', media: 8.5, faltas: 4},
    ]

    inserirNota = (materia) => {
        swal.fire({
            html: `
                <div id="title" class="title-alert">A matéria escolhida foi <div id="materia">${materia}</div></div>
                <div>
                    <div>
                        <div class="label-div">Insira sua nota:</div>
                        <input id="nota" class="input-alert"/>
                    </div>
                    <div>
                        <div class="label-div">Insira o peso da nota:</div>
                        <input id="peso" class="input-alert"/>
                    </div>
                    <div>
                        <div class="label-div">Insira a quantidade de faltas:<br/> (caso tenha)</div>
                        <input id="falta" class="input-alert"/>
                    </div>
                </div>
            `,
            confirmButtonText: '<div id="isSave">Salvar</div>',
            closeOnConfirm: false
          });

          let save = document.getElementById('isSave');

          save.addEventListener("click", () => {this.isSave()});

    }

    isSave = () => {

        let materia = document.getElementById('materia').textContent;
        let nota = document.getElementById('nota').value;
        let peso = document.getElementById('peso').value;
        let falta = document.getElementById('falta').value;

        console.log(materia, nota, peso, falta);
        
    }

    render() {
        return(
        <>
            <Header />
            <div className="main-home">
                <div className="box-notas-home">
                    <div className="cabecalho">
                        <div className="line">
                            <div className="title">Matéria</div>
                            <div className="title meio">Média</div>
                            <div className="title">Faltas</div>
                        </div>
                    </div>
                    {this.dados.map(dado => {
                        return(
                            <>
                            <div key={dado.materia} className="notes">
                                <div style={{marginLeft: 10}} className='line'> <div className={dado.media > 6 ? 'acima' : dado.media === 6 ? 'medio' : 'baixo'}></div> <div>{dado.materia}</div></div>
                                <div className="line meio">{dado.media}</div>
                                <div className="line">{dado.faltas}</div>
                                <div onClick={() => this.inserirNota(dado.materia)} className="plus">+</div>
                            </div>
                            </>
                        )
                    })}
                </div>

                <div style={{width: '45%'}} className="legenda">
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
            <div className="footer">
                <div className="infos">
                    <div className="info">
                        USJ
                    </div>
                    <div className="info">
                        São José, SC
                    </div>
                    <div className="info">
                        (48) 3456-5687
                    </div>
                </div>
                <hr/>
                <div className="infos">
                    <div className="info2">
                        Desenvolvido por:
                    </div>
                    <div className="info2">
                        Diego Sousa, Elaine Mattje
                    </div>
                    <div className="info2">
                        Jessica Gerente, Julia Navegantes
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Home;