import React, { useState } from 'react'
import Sellos from './Sellos'

export default function Home() {
    const [texto, setTexto] = useState('')

    return (
        <div id="home">

            <div className="perfil">
                <p className="animacion">{texto}</p>
                <div className="imgFondo">
                    <img src="/img/tennis.png" alt=""></img>
                </div>
                <img className="imgPerfil" src="/img/profile-pic.png" alt=""></img>
                <h1>Alan Sztamfater</h1>
            </div>
            <h3>Programador & Diseñador
                <hr />
                <hr />
                <hr />
                <span>Web</span></h3>
            <h3 className="code">Lenguajes</h3>
            <ul>
                <li>React</li>
                <li>JS</li>
                <li>MySQL</li>
                <li>Java</li>
                <li>CSS3</li>
            </ul>
            <p className="titulo">Ver Proyectos</p>
            <Sellos></Sellos>
        </div>
    )
}