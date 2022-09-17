import React from 'react'
import { motion } from 'framer-motion'


export default function Footer() {
    const variant = {
/*         hidden: { background: 'linear-gradient(10deg, #ff8b00, #000000eb)' },
        visible: { background: 'linear-gradient(182deg, #ff8b00, #000000eb)', transition: { duration: 3 } }, */
    }
    return (
        <motion.div className="footer" variants={variant} initial='hidden' animate='visible'>
            <div className="icono">
                {/*                 <img src="/img/earth.png" alt=""></img> */}
                <img src="https://cdn-icons-png.flaticon.com/512/1239/1239062.png?w=826&t=st=1662991433~exp=1662992033~hmac=556e8b54a6271e7ac80ffde85038b48d2c00f00536f9229327cb1f416a8f077b" alt=""></img>
                <p>alansztamfater.es</p>
            </div>
            {/*             <ul>
                <li>Ofertas</li>
                <li>Proyectos</li>
            </ul> */}
            <ul>
                <li><img src="/img/prestashop-icon.png" alt=""></img>e-commerce</li>
                <li><img src="/img/blogger-icon.png" alt="" />Blogs personales</li>
                <li><img src="/img/instagram.png" alt=""></img>Tienda</li>
            </ul>
        </motion.div>
    )
}