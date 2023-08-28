import Head from 'next/head';
import Cursor from './cursor';
import styles from './coming.module.css';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
import ScrollBehavior from './scrollBehavior';
import SocialMedias from './socialMedias';
const siteTitle = "Bem vindo!"


export default function Layout({children, home}){

    return(
        <div className={styles.comingPage}>
            <motion.svg
             className={styles.bgWave}
             initial = {{
                position: "absolute",
                top: "-5vh",
                transform: "rotate(180deg) skewY(0deg)"
             }}
             animate = {{
                top: "-12vh",
                transform: "rotate(180deg) skewY(6deg)"
             }}
             transition = {{
                duration: 2,
                delay: 0.4,
                repeat: Infinity,
                repeatType : "reverse"
             }}
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1440 320">
             <path fill="#2d45e0" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,181.3C672,181,768,107,864,117.3C960,128,1056,224,1152,266.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></motion.svg>
            <Cursor/>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/img/favicon.png"/>
            </Head>
            <section className={styles.comingPage_section}>
                <div className={styles.comingSection}>
                    <motion.h1 
                        className={styles.welcomeTitle}
                        initial =  {{
                            top: "-20%",
                            opacity: 0
                        }}
                        animate = {{
                            top: "30%",
                            opacity: 1
                        }}
                        transition = {{
                            ease: "linear",
                            duration: 0.4,
                            opacity: { duration: 1.8 }
                        }}
                    >
                        Bem vindo
                    </motion.h1>

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
                    <motion.a className={styles.navItem} href='curriculum'>
                        CV
                    </motion.a>

                    <motion.a className={styles.navItem} href='curriculum'>
                        Sobre mim
                    </motion.a>

                    <motion.a className={styles.navItem} href='curriculum'>
                        Portfolio
                    </motion.a>
                </motion.div>
                </div>
                <section className={styles.aboutMe_section}>
                    <div className={styles.aboutMe_container}>
                        <motion.div
                            className={styles.aboutMe_box}
                            initial = {{ 
                                opacity: 0,
                                transform: "scale(0.5)"
                             }}
                            whileInView = {{ 
                                opacity: 1,
                                transform: "scale(1)"
                             }}
                            exit = {{ 
                                opacity: 0,
                                transform: "scale(0.8)"
                             }}
                            transition = {{ 
                                ease: "linear",
                                duration: 0.7,
                                transform: { delay: 0.3 , duration: 0.3 }
                            }}
                        >
                            <figure className={styles.aboutMe_figure}>
                                <Image className={styles.aboutMe_img} width={640} height={587} src='/img/coming-profile.jpg'></Image>
                            </figure>
                            <div className={styles.aboutMe_card}>
                                <h1 className={styles.aboutMe_title}>Sobre mim</h1>
                                <h2 className={styles.aboutMe_myName}>Luis Felipe Gonçalves Modesto</h2>
                                <p className={styles.aboutMe_paragraph}>
                                    Minha história na programação começa em 2019, com 14 anos de idade, na Etec Antonio Devisate, quando embarquei no primeiro ano de Ensino Médio Integrado ao Técnico, 
                                    realizando o curso de Desenvolvimento de Sistemas. Desde então, fui aprendendo e me apaixonando cada vez mais pela área. <br></br><br></br>
                                    Hoje em dia, meu foco é voltado para Desenvolvimento Web Front-End, porém meu objetivo é me tornar um Full Stack! <br></br><br></br>
                                    Atualmente estou trabalhando na agência <Link className={styles.link_work} href="https://eficazmarketing.com/">Eficaz Marketing e Tecnologia</Link>. Atuo como desenvolvedor Front-End, Desenvolvedor Adtech e responsável por dar tutoria para estagiários.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </section>
        </div>
    )
}
