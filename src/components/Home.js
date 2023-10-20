import React, { useState } from 'react';
import Sellos from './Sellos';
import Web from './Web';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from './Toast';

export default function Home() {
  const [cambiar, setCambiar] = useState(true);
  const [[toast, mensaje], setToast] = useState([false, '']);
  function Botoncito() {
    const variantePlus = {
      visible: { filter: 'blur(0px)', scale: 1 },
      hidden: { filter: 'blur(6px)', scale: 0 },
    };
    const boton = cambiar ? 'CONTACTO' : 'VOLVER';
    return (
      <motion.div whileHover={{ scale: 1.1 }} variants={variantePlus} initial='hidden' animate='visible' className='hover:cursor-pointer plus border border-gray-500'>
        {boton}
      </motion.div>
    );
  }

  function Condicional() {
    const varianteFicha = {
      visible: { rotate: 0, filter: 'blur(0px)', scale: 1 },
      hidden: { rotate: '50deg', filter: 'blur(6px)', scale: 1.4 },
    };
    const varianteFicha2 = {
      visible: { rotate: 0, filter: 'blur(0px)', scale: 1 },
      hidden: { rotate: '-50deg', filter: 'blur(6px)', scale: 2 },
    };
    const recado = cambiar ? (
      <motion.div
        variants={varianteFicha}
        animate='visible'
        initial='hidden'
        exit={{ rotate: '130deg' }}
        className='perfil'
        onClick={() => {
          setCambiar(!cambiar);
        }}>
        <div className='programador h3'>
          <Botoncito />
          <b>Alan Sztamfater</b>
          <b className='text-sm mt-4 text-red-100 border-t border-gray-500 pt-6'>FrontEnd</b>
          <p className='mt-4 sm:text-xl'>Diseño webs con Dreamweaver y Flash.</p>

          <Web />
        </div>
      </motion.div>
    ) : (
      <motion.div
        variants={varianteFicha2}
        animate='visible'
        initial='hidden'
        exit={{ rotate: '30deg' }}
        className='perfil'
        onClick={(e) => {
          if (e.target.className !== 'whatsapp') setCambiar(!cambiar);
        }}>
        <h3 className='programador gap-y-6 flex flex-col'>
          <Botoncito />
          <span
            onClick={(e) => {
              e.stopPropagation();
              setToast([true, 'E-Mail copiado']);
            }}
            className='border p-2 text-white text-xl rounded w-fit mx-auto'>
            E-Mail
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              setToast([true, 'Número copiado']);
            }}
            className='border p-2 text-white text-xl rounded w-fit mx-auto'>
            Whatsapp
          </span>
        </h3>
      </motion.div>
    );

    return <AnimatePresence>{recado}</AnimatePresence>;
  }
  const techs = [
    { name: 'react', img: 'react' },
    { name: 'js', img: 'js' },
    { name: 'MySQL', img: 'mysql' },
    { name: 'java', img: 'java' },
    { name: 'CSS3', img: 'css' },
    { name: 'NodeJS', img: 'nodejs' },
  ];
  return (
    <div id='home'>
      <Condicional />
      {toast && <Toast set={setToast} mensaje={mensaje} />}
      <ul className='techs mt-8'>
        {techs.map((elemento) => {
          return (
            <li className='conImagen'>
              {<img src={'./img/' + elemento.img + '.svg'} alt='' />}
              {elemento.name}
            </li>
          );
        })}
      </ul>
      <Sellos></Sellos>
    </div>
  );
}
