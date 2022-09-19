import React, { useState } from 'react'
import Sellos from './Sellos'
import Web from './Web'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const [cambiar, setCambiar] = useState(true)
    function Botoncito() {
        const variantePlus = {
            visible: { filter: 'blur(0px)', scale: 1 },
            hidden: { filter: 'blur(6px)', scale: 0 },
        }
        const boton = cambiar ? 'contacto >' : '< volver'
        return (
            <motion.div whileHover={{scale:1.1}} variants={variantePlus} initial='hidden' animate='visible' className="plus">{boton}</motion.div>
        )
    }
    function Condicional() {
        const varianteFicha = {
            visible: { rotate: 0, filter: 'blur(0px)', scale: 1 },
            hidden: { rotate: '50deg', filter: 'blur(6px)', scale: 1.4 },
        }
        const varianteFicha2 = {
            visible: { rotate: 0, filter: 'blur(0px)', scale: 1 },
            hidden: { rotate: '-50deg', filter: 'blur(6px)', scale: 2 },
        }
        const recado = cambiar ? <motion.div variants={varianteFicha} animate='visible' initial='hidden' exit={{ rotate: '130deg' }} className="perfil" onClick={() => { setCambiar(!cambiar) }}>
            <h3 className="programador">
            <Botoncito />
                <b><i>A</i>lan <i>S</i>ztamfater</b>
                <span className="textonormal">Programador <i>&</i> Diseñador</span>
                <Web />
            </h3>
        </motion.div> : <motion.div variants={varianteFicha2} animate='visible' initial='hidden' exit={{ rotate: '30deg' }} className="perfil" onClick={(e) => {
            if (e.target.className !== 'whatsapp')
                setCambiar(!cambiar)
        }}>
            <h3 className="programador">
            <Botoncito />
                <span className="whatsapp">e-mail</span>
                <span className="whatsapp">WHATSAPP</span>
            </h3>
        </motion.div>;

        return (
            <AnimatePresence>
                
                {recado}
            </AnimatePresence>
        )
    }
    const techs = [
        { name: 'react', img: 'react' },
        { name: 'js', img: 'js' },
        { name: 'MySQL', img: 'mysql' },
        { name: 'java', img: 'java' },
        { name: 'CSS3', img: 'css' },
        { name: 'PHP', img: 'php' },
        { name: 'NodeJS', img: 'nodejs' },
    ]
    return (
        <div id="home">
            <Condicional />
            <h3 className="code none">Tecnologías</h3>
            <ul className="techs">
                {techs.map((elemento) => {
                    return (<li className="conImagen">{<img src={'./img/' + elemento.img + '.svg'} alt="" />}
                        {elemento.name}
                    </li>)
                })}
            </ul>
            <Sellos ></Sellos>
        </div>
    )
}