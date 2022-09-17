import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

export default function Web() {
    const [web, setWeb] = useState(false)
    const { scrollY } = useScroll()
    const varianteWeb = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-50px', opacity: 0 },
    }
    useEffect(() => {
        scrollY.onChange((latest) => {
            if (latest === 0) {
                setWeb(false)
            } else {
                setWeb(true)
            }
        })
    }, [scrollY])
    return (
        <motion.div className="text-background"
            animate={web ? 'visible' : 'hidden'} variants={varianteWeb} transition={{ duration: 0.5 }} initial='hidden'>
            <span >Web</span></motion.div >
    )
}