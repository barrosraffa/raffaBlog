import React, { Component } from "react";
import './album.scss';
import daiana from '../../assets/daiana.jpg';
import gustavito from '../../assets/Gustavito.jpg'


class Album extends Component {
    render(){
        return(
            <section className="cardContainer">
                <div class="card-deck">
                    <div class="card">
                        <img src={gustavito} id="imagem"/>
                        <div class="card-body">
                        <h5 class="card-title">Daiana</h5>
                        <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Atualizados 3 minutos atrás</small>
                        </div>
                    </div>
                    <div class="card">
                        <img src={gustavito} id="imagem"/>
                        <div class="card-body">
                        <h5 class="card-title">Daiana</h5>
                        <p class="card-text">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Atualizados 3 minutos atrás</small>
                        </div>
                    </div>
                    <div class="card">
                        <img src={gustavito} id="imagem"/> 
                        <div class="card-body">
                        <h5 class="card-title">Daiana</h5>
                        <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Atualizados 3 minutos atrás</small>
                        </div>
                    </div>
                    </div>
            </section>
        )
    }
       
}

export default Album