import React, { useState, useEffect } from 'react'
import Sellos from './Sellos'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

export default function Home() {
    const [cambiar, setCambiar] = useState(true)
    const [web, setWeb] = useState(true)
    const { scrollYProgress, scrollY } = useScroll()
    function Condicional() {

        const varianteFondo = {
            visible: { 'background-position': ['0px 0px', '-160px 20px', '0px 0px', '-110px 60px', '0px 0px',] },
            hidden: { 'background-position': '0px 0px' },
        }
        const varianteWeb = {
            visible: { y: 0, opacity:1 },
            hidden: { y: '-50px',opacity:0.1 },
        }
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
                <motion.div className="text-background"
                    animate={scrollYProgress > 0 ? 'visible' : 'hidden'}
                    variants={varianteWeb} transition={{ duration: 1 }}
                    initial='hidden'
                    /*style={{ opacity: scrollY }}*/
                    >
                    {/* <img src="./img/profile.png" alt=""></img> */}



                    <span >Web {/* <img className="web" src="img/pointer.png" alt=""></img> */}
                    </span></motion.div>
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
    useEffect(() => {
        console.log(scrollY.current)
/*         scrollY.onChange((latest) => {
            if (latest === 0) {
                console.log('es 0')
                setWeb(false)
            } else {
                setWeb(true)
            }
        }) */
    }, [scrollY])
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