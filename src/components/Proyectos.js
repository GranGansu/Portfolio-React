import React, { useState } from 'react';
import Tarjeta from './Tarjeta';
export default function Proyectos() {
  const proyectos = [
    { imagen: 'ecommerce.jpg', categoria: 'E-Commerce', tecnologias: ['PHP', 'CSS'], descripcion: 'Tienda online' },
    {
      imagen: 'portfolio.png',
      categoria: 'Portfolio',
      tecnologias: ['React', 'CSS'],
      descripcion: 'Portfolio hecho con React, SCSS',
    },
    { imagen: 'gshock.webp', categoria: 'Info', tecnologias: ['React', 'CSS'], descripcion: 'Venta de gshock' },
  ];
  const [activo, setActivo] = useState(0);
  return (
    <div id='proyectos'>
      <div className='card-container'>
        {proyectos.map((proyecto, key) => {
          return <Tarjeta proyecto={proyecto} lle={key} activo={activo} setActivo={setActivo} />;
        })}
      </div>
    </div>
  );
}
