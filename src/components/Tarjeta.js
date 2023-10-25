import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Tarjeta(props) {
  const [active, setActive] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });

  const variants = {
    visible: { opacity: 1, y: 0, rotate: 0 },
    hidden: { opacity: 0, y: -100, rotate: 10 },
    exit: { scale: 2 },
  };
  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.div
      whileTap={{ scale: 1.03, borderRadius: '10px' }}
      onClick={() => {
        setActive((prev) => !prev);
      }}
      onHoverStart={() => {
        setActive(true);
      }}
      onHoverEnd={() => {
        setActive(false);
      }}
      variants={variants}
      ref={ref}
      initial='hidden'
      animate={control}
      exit='exit'
      className='card'>
      <div>
        <div className='absolute flex flex-col items-center justify-center h-full w-full'>
          <div className='flex flex-col' style={{ paddingTop: '10px', display: active ? 'flex' : 'none' }}>
            <p className=' text-black font-bold text-2xl'>{props.proyecto.descripcion}</p>

            {props.proyecto.url && (
              <a href={props.proyecto.url} className='hover:scale-110'>
                Enlace GitHub
              </a>
            )}
          </div>
        </div>
        <div className='ppl-thumbnail '>
          <motion.img animate={{ height: active ? 0 : 200 }} src={'./img/' + props.proyecto.imagen} alt='' />
          <b>{props.proyecto.categoria}</b>
        </div>
        <div className='tecnologias' style={{ display: active && 'none' }}>
          {props.proyecto.tecnologias.map((tech) => {
            return <img src={'./img/' + tech.toLowerCase() + '.svg'} alt=''></img>;
          })}
        </div>
      </div>
    </motion.div>
  );
}
