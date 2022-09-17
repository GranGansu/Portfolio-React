import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Tarjeta(props) {
    const [[estado, llave], cambiarEstado] = useState([1, 6])
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.8 });

    const variants = {
        visible: { opacity: 1, y: 0, rotate: 0 },
        hidden: { opacity: 0, y: -100, rotate: 50 },
        exit: { scale: 2 },
       /*  transition: {duration:1,times:[0,0.1,0.2]} */
    }
    useEffect(() => {
        if (inView) {
            control.start('visible')
        }

    }, [control, inView])
    if (estado === 1 && props.lle === llave && props.activo === props.lle) {
        return (
            <div className="card nuevo" onClick={() => { cambiarEstado([2, props.lle]) }}>
                <div className="ppl-thumbnail menos">
                    <img src={"./img/" + props.proyecto.imagen} alt="" />
                    <b>{props.proyecto.categoria}</b>
                </div>
                <div className="tecnologias">
                    <p>{props.proyecto.descripcion}</p>
                </div>
            </div>
        )
    }
    return (
        <motion.div variants={variants} ref={ref} initial='hidden' animate={control} exit='exit' className="card" onClick={() => { cambiarEstado([1, props.lle]); props.setActivo(props.lle) }}>
            <div className="ppl-thumbnail ">
                <img src={"./img/" + props.proyecto.imagen} alt="" />
                <b>{props.proyecto.categoria}</b>
            </div>
            <div className="tecnologias">
                {props.proyecto.tecnologias.map((tech) => {
                    return (
                        <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + tech.toLowerCase() + "/" + tech.toLowerCase() + "-original.svg"} alt=""></img>
                    )
                })}
            </div>
        </motion.div>
    )
}