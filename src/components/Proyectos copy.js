import React from 'react'

export default function Proyectos() {
    const proyectos = [
        { imagen: "proyectos_elec.png", categoria: 'E-Commerce', tecnologias: ['Prestashop', 'CSS'] },
        { imagen: "proyectos_yo.png", categoria: 'Portfolio', tecnologias: ['React', 'CSS'] },
        { imagen: "proyectos_gshock.png", categoria: 'Online', tecnologias: ['React', 'CSS'] },
    ]
    return (
        <div id="proyectos">
            {/* <h1>Proyectos</h1> */}
            <div className="card-container">
                {proyectos.map((proyecto, key) => {
                    return (
                        <div className="card" key={key}>
                        <p>{proyecto.categoria}</p>
                            <img src={"./img/" + proyecto.imagen} alt="" />
                            <ul>
                                {proyecto.tecnologias.map((tech) => {
                                    return (
                                        <li><img src={"./img/" + tech.toLowerCase() + "-icon.png"} alt="" /></li>
                                    )
                                })}
                            </ul>
                            <div className="tecnologias">
                            <p>{proyecto.tecnologias.join(" · ")}</p>
                            </div>
{/*                             <img className="imgnow mas" src={"./img/reacty.png"} alt="" />
                            <img className="imgnow" src={"./img/prestashopy.png"} alt="" /> */}
                        </div>
                    )
                })}</div>
        </div>
    )
}