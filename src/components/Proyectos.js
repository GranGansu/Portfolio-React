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
      url: 'https://github.com/GranGansu/Portfolio-React',
    },
    { imagen: 'gshock.webp', categoria: 'Info', tecnologias: ['React', 'CSS'], descripcion: 'Venta de gshock', url: 'https://github.com/GranGansu/G-Shock-Display-Website-React' },
    { imagen: 'weather.png', categoria: 'Weather', tecnologias: ['React', 'CSS'], descripcion: 'WeatherApp', url: 'https://github.com/GranGansu/weather' },
    { imagen: 'travel.jpg', categoria: 'Travel Guide', tecnologias: ['React', 'CSS'], descripcion: 'Online Guide', url: 'https://github.com/GranGansu/TravelGuide-NextJS' },
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
