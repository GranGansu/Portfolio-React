import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div className='footer'>
      <div className='icono'>
        {/*  <img src="/img/earth.png" alt=""></img>  */}
        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }} src='./img/profile-pic2.png' alt=''></motion.img>
        <p>
          <b className='text-yellow-300'>alan</b>sztamfater.es
        </p>
      </div>
      <ul>
        <li>
          <img src='/img/prestashop-icon.png' alt=''></img>e-commerce
        </li>
        <li>
          <img src='/img/blogger-icon.png' alt='' />
          Blogs personales
        </li>
        <li>
          <img src='/img/instagram.png' alt=''></img>Tienda
        </li>
      </ul>
    </motion.div>
  );
}
