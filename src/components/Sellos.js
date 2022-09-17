import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Tarjeta({ children, titulo, sub, insti, icono }) {
    const duracionImagen = 0.5;
    const duracion = 1;
    const imagen = {
        hidden: { opacity: 0, scale: 0.6, rotate: '20deg' },
        visible: { opacity: 1, scale: 1.1, rotate: 0 },
    }
    const titulo1 = {
        hidden: { opacity: 0, translateX: '-100px' },
        visible: { opacity: 1, translateX: '0px' },
    }
    const titulo2 = {
        hidden: { opacity: 0, translateX: '100px' },
        visible: { opacity: 1, translateX: '0px' },
    }
    const botonIOC = {
        hidden: { opacity: 0, translateY: '-150px' },
        visible: { opacity: 1, translateY: '0px' },
    }
    const control = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.8 })
    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
        /*         else {
                    control.start('hidden')
                } */
    }, [control, inView])
    return <motion.div whileHover={{ translate: '10px 20px', 'box-shadow': '0 0 5px yellow',cursor:'pointer' }} whileTap={{ translate: '10px 20px' }}>
        <motion.img src={'./img/' + icono + '.png'} alt="" className="iconos" variants={imagen} ref={ref} initial='hidden' animate={control} transition={{ delay: 1.1, duration: duracionImagen }}></motion.img>
        <motion.p variants={titulo1} ref={ref} initial='hidden' animate={control} transition={{ duration: duracion }}>{titulo}

        </motion.p>
        <motion.p variants={titulo2} ref={ref} initial='hidden' animate={control} transition={{ duration: duracion }}>{sub}

        </motion.p>
        <motion.button variants={botonIOC} ref={ref} initial='hidden' animate={control} transition={{ duration: duracion }}>{insti}<div className='dot'></div></motion.button>
        {children}
    </motion.div>
}

export default function Sellos() {
    return (
        <>
        <hr></hr>
        <div className="fondowrapper">
            <div className="h2">
                <span >Medallas</span>
            </div>
            <div id="sellos">
                <Tarjeta titulo='Bootcamp' sub='React' insti='IT ACADEMY' icono='medal2'>
                </Tarjeta>
                <Tarjeta titulo='FP Desarrollo' sub='Aplicaciones Web' insti='IOC' icono='medal2'>
                </Tarjeta>
                <Tarjeta titulo='FP Desarrollo' sub='Aplicaciones Multimedia' insti='IOC' icono='medal2'>
                </Tarjeta>
                <Tarjeta titulo='c2' sub='INGLES' insti='EF' icono='british'>
                </Tarjeta>
            </div>
        </div>
        </>
    )
}