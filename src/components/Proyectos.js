import React, { useState } from 'react'
import Tarjeta from './Tarjeta'
export default function Proyectos() {
    const proyectos = [
        { imagen: "ecommerce.jpg", categoria: 'E-Commerce', tecnologias: ['PHP', 'CSS'], descripcion: 'Tienda online' },
        { imagen: "portfolio.png", categoria: 'Portfolio', tecnologias: ['React', 'CSS'], descripcion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
        { imagen: "gshock.webp", categoria: 'Blog Personal', tecnologias: ['React', 'CSS'], descripcion: 'Venta de gshock' },
    ]
    const [activo, setActivo] = useState(0)
    return (
        <div id="proyectos">
            <div className="card-container">
                {proyectos.map((proyecto, key) => {
                    return (
                        <Tarjeta proyecto={proyecto} lle={key} activo={activo} setActivo={setActivo} />
                    )
                })}
            </div>
        </div>
    )
}