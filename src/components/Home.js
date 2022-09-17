import React, { useState } from 'react'
import Sellos from './Sellos'
import Web from './Web'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
    const [cambiar, setCambiar] = useState(true)

    function Condicional() {
        const varianteFicha = {
            visible: { rotate: 0, filter: 'blur(0px)', scale: 1 },
            hidden: { rotate: '50deg', filter: 'blur(6px)', scale: 1.4 },
        }
        const varianteFicha2 = {
            visible: { rotate: 0, filter: 'blur(0px)', scale: 1 },
            hidden: { rotate: '-50deg', filter: 'blur(6px)', scale: 2 },
        }
        const recado = cambiar ? <motion.div variants={varianteFicha} animate='visible' initial='hidden' exit={{ rotate: '30deg' }} className="perfil" onClick={() => { setCambiar(!cambiar) }}>
            <h3 className="programador">
                <div className="none">
                    <img src="img/monito.gif" alt=""></img>
                </div>
                <b><i>A</i>lan <i>S</i>ztamfater</b>
                <span className="textonormal">Programador <i>&</i> Diseñador</span>
                <Web />
            </h3>
        </motion.div> : <motion.div variants={varianteFicha2} animate='visible' initial='hidden' exit={{ rotate: '30deg' }} className="perfil" onClick={(e) => {
            if (e.target.className !== 'whatsapp')
                setCambiar(!cambiar)
        }}>
            <h3 className="programador">
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

    return (
        <div id="home">
            <Condicional />
            <h3 className="code none">Tecnologías</h3>
            <ul className="techs">
                {/*                 <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="" />
                </li> */}
                {/*                 <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                </li> */}
                {/*                 <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </li> */}
                <li>React</li>
                <li>JS</li>
                <li>MySQL</li>
                <li>Java</li>
                <li>CSS3</li>
                <li>PHP</li>
                <li>NODEJS</li>
            </ul>
            <Sellos ></Sellos>
        </div>
    )
}