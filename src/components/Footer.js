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
          <a href='https://github.com/GranGansu'>GitHub</a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/alan-sztamfater/'>Linkedin</a>
        </li>
        {/*         <li>
          <a href='https://github.com/GranGansu'>GitHub</a>
        </li> */}
      </ul>
    </motion.div>
  );
}
