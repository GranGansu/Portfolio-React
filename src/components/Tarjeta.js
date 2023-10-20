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
          <p className=' text-black font-bold text-xl' style={{ paddingTop: '10px', display: active ? 'flex' : 'none' }}>
            {props.proyecto.descripcion}
          </p>
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
