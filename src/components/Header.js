import { Link, useLocation } from 'react-router-dom'
import React, { useRef } from 'react'

export default function Header() {
    const numerito = useRef(0);
    const location = useLocation();
    const rutas = [
        { url: '', name: 'Yo' },
        { url: 'proyectos', name: 'Proyectos' }
    ]
    const funcion = (e) => {
        /* e.target.className = "g" */
    }
    return (
        <nav>
            <ul>
                {//Si el numero es menor, se carga animacion left, si es mayor, right
                    rutas.map((ruta, key) => {
                        if (location.pathname === '/' + ruta.url) {
                            numerito.current = key;
                            if (numerito.current < key) {
                                return <Link to={ruta.url} onClick={funcion} key={key}>
                                    <li className="active">{ruta.name}</li></Link>
                            } else {
                                return <Link to={ruta.url} onClick={funcion} key={key}>
                                    <li className="active">{ruta.name}</li></Link>
                            }
                        }
                        return <Link to={ruta.url} onClick={funcion} key={key}><li >{ruta.name}</li></Link>
                    })}
            </ul>
        </nav>
    )
}