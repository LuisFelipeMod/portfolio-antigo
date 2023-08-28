import Head from 'next/head';
import Cursor from './cursor';
import Link from 'next/link';
import Image from 'next/image';
import ScrollBehavior from './scrollBehavior';
import SocialMedias from './socialMedias'
import styles from './curriculum.module.css'
import { motion } from "framer-motion"
const siteTitle = "Meu currículo"

export default function Curriculum({children, home}){
    return(
        <div className='main'>
            <Cursor/>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/img/favicon.png"/>
            </Head>
            <div className='container'>
                <div className={styles.section_info}>
                    <Image className={styles.meImg} src='/img/me.jpg' width='200' height='200' alt='imagem de perfil' priority></Image>
                    <h1 className={styles.name}>Luis Felipe<br></br>Gonçalves Modesto</h1>
                    <h2 className={styles.occupation}>Desenvolvedor Front-End</h2>
                    <ScrollBehavior/>
                    <SocialMedias/>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_about}>
                        <span className={styles.about} id='about'>
                            Minha história na programação começa em 2019, com 14 anos de idade, na Etec Antonio Devisate, quando embarquei no primeiro ano de Ensino Médio Integrado ao Técnico, 
                            realizando o curso de Desenvolvimento de Sistemas. Desde então, fui aprendendo e me apaixonando cada vez mais pela área. <br></br><br></br>
                            Hoje em dia, meu foco é voltado para Desenvolvimento Web Front-End, meu objetivo a médio prazo é me tornar um Full Stack! <br></br><br></br>
                            Atualmente estou trabalhando na agência <Link className={styles.link_work} href="https://eficazmarketing.com/">Eficaz Marketing e Tecnologia</Link>. Atuo como desenvolvedor Front-End, Desenvolvedor Adtech e responsável por dar tutoria para estagiários.
                        </span>                 
                    </div>

                    <h3 className={styles.title_experience} id='profissional'>Profissional:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={styles.box_experience}>
                        <span className={styles.year_experience}>2022 - atual</span>
                        <div className={styles.info_experience}>
                            <Link href='https://eficazmarketing.com/' className={styles.profission_experience}>Desenvolvedor Front-End - Eficaz Marketing<span className={styles.arrow_up}>⮭</span></Link>
                            <span className={styles.level_experience}>Trainee</span>
                            <span className={styles.desc_experience}>
                                Atualmente, desenvolvo para plataformas e-commerce e sou responsável pelo Adtech da empresa, também tenho a honra ser o principal responsável por dar tutoria para estagiários.
                            </span>    
                        </div>
                    </div>
                    <div className={styles.box_experience}>
                        <span className={styles.year_experience}>jan de 2022 - nov de 2022</span>
                        <div className={styles.info_experience}>
                            <Link href='https://eficazmarketing.com/' className={styles.profission_experience}>Desenvolvedor Front-End - Eficaz Marketing<span className={styles.arrow_up}>⮭</span></Link>
                            <span className={styles.level_experience}>Estágiário</span>
                            <span className={styles.desc_experience}>
                                Atuo desenvolvendo para plataformas e-commerces, tais como: Tray, Wake, Wordpress e Loja Integrada.<br></br>Também adquiri conhecimento em Adtech, sendo responsável pela maioria das demandas Adtech da empresa.
                            </span>    
                        </div>
                    </div>
                    <div className={`${styles.box_experience} ${styles.box_minor}`}>
                        <span className={styles.year_experience}>jan de 2022 - nov de 2022</span>
                        <div className={styles.info_experience}>
                            <Link href='https://www.paschoalotto.com.br/' className={styles.profission_experience}>Operador de teleserviços - Paschoalotto<span className={styles.arrow_up}>⮭</span></Link>
                            <span className={styles.level_experience}>Tempo Integral</span>  
                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='education'>Formação:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <span className={styles.year_experience}>2022 - 2024 (em curso)</span>
                        <div className={styles.info_experience}>
                            <Link href='https://eficazmarketing.com/' className={styles.profission_experience}>Análise e Desenvolvimento de Sistemas</Link>
                            <span className={styles.desc_experience}>

                            </span>    
                        </div>
                    </div>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <span className={styles.year_experience}>2019 - 2021</span>
                        <div className={styles.info_experience}>
                            <Link href='https://www.cps.sp.gov.br/etec/' className={styles.profission_experience}>Ensino Técnico de Desenvolvimento de Sistemas Integrado ao Ensino Médio - Etec Antonio Devisate</Link>
                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='language'>Idioma:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Inglês Intermediário</Link>    
                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='knowledge'>Conhecimentos:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>JavaScript; React; NextJS; jQuery; PHP; Twig; Git; Babel;<br></br><br></br>HTML; CSS; SASS; Stylus; Figma; <br></br><br></br>Github; Google Analytics; Google Tag Manager; Google Merchant Center; Google Ads;</Link> 
                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='school'>Vivência Escolar:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Monitor de Língua Portuguesa – Etec Antonio Devisate – 2019;</Link> 
                        </div>
                    </div>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Visita Técnica: Casa Sol – Etec Antonio Devisate – 2019;</Link> 
                        </div>
                    </div>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Representante de Turma – E.E. Maria Izabel Sampaio Vidal – 2017;</Link> 
                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='volunteer'>Trabalhos Voluntários:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Recicla Etec (Etec Antonio Devisate) – 2019</Link> 
                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='speeches'>Palestras e Cursos Complementares:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Eventos FLISOL 2018: “O que você precisa saber sobre Blockchain” e “Blockchain e a Indústria 4.0” – 2019 – Centro Universitário Eurípides de Marília – UNIVEM;</Link> 
                            <Link href='#' className={styles.profission_experience}>Aprendendo na Web – curso online – Bradesco;</Link>
                            <Link href='#/' className={styles.profission_experience}>Fundamentos do Design Gráfico – curso online – Bradesco.</Link>

                        </div>
                    </div>
                    <h3 className={styles.title_experience} id='speeches'>Referências:</h3>
                    <hr className={styles.divisor}></hr>
                    <div className={`${styles.box_experience} ${styles.box_auto}`}>
                        <div className={styles.info_experience}>
                            <Link href='#' className={styles.profission_experience}>Dra. Sra. Marina João Bernardes de Oliveira – Professora – Etec Antonio Devisate - (14)3444-5467.</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
