import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Tarjeta({ children, titulo, sub, insti, icono }) {
  const duracionImagen = 1;
  const duracion = 1;
  const opacidad = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });
  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);
  return (
    <motion.div
      variants={opacidad}
      ref={ref}
      initial='hidden'
      animate={control}
      whileHover={{ translate: '5px 5px', 'box-shadow': '0 0 5px yellow', cursor: 'pointer' }}
      whileTap={{ translate: '5px 5px' }}>
      <motion.img
        src={'./img/' + icono + '.png'}
        alt=''
        className='iconos'
        ref={ref}
        initial='hidden'
        animate={control}
        transition={{ delay: 0, duration: duracionImagen }}></motion.img>
      <motion.p ref={ref} initial='hidden' animate={control} transition={{ duration: duracion }}>
        {titulo}
      </motion.p>
      <motion.p ref={ref} initial='hidden' animate={control} transition={{ duration: duracion }}>
        {sub}
      </motion.p>
      <motion.button ref={ref} initial='hidden' animate={control} transition={{ duration: duracion }}>
        {insti}
        {/* <div className='dot'></div> */}
      </motion.button>
      {children}
    </motion.div>
  );
}

export default function Sellos() {
  return (
    <>
      <div className='fondowrapper mt-16'>
        <div className='h2'>
          <span>Certificados</span>
        </div>
        <div id='sellos'>
          <Tarjeta titulo='Bootcamp' sub='React' insti='IT ACADEMY' icono='medal2'></Tarjeta>
          <Tarjeta titulo='FP Desarrollo' sub='Aplicaciones Web' insti='IOC' icono='medal2'></Tarjeta>
          <Tarjeta titulo='FP Desarrollo' sub='Aplicaciones Multimedia' insti='IOC' icono='medal2'></Tarjeta>
          <Tarjeta titulo='c2' sub='INGLES' insti='EF' icono='british'></Tarjeta>
        </div>
      </div>
    </>
  );
}
