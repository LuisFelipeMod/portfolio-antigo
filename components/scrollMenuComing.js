import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from './coming.module.css';


export default function scrollMenuComing() {
    const scrollToAboutMe = () => {
        const aboutSection = document.getElementById("aboutMe");

        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return(
        <motion.div
            className={styles.nav}
            initial = {{
                top: "120%",
                opacity: 0
            }}
            animate = {{
                top: "58vh",
                opacity: 1
            }}
            transition={{
                ease: "linear",
                duration: 0.4,
                opacity: { duration: 1.8 }
            }}
        >

        <motion.a className={styles.navItem} onClick={scrollToAboutMe}>
            Sobre mim
        </motion.a>

        <motion.a className={styles.navItem} href='curriculum'>
            Currículo
        </motion.a>

    </motion.div>
    )
}