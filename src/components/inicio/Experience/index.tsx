import styles from "./styles.module.scss"
import Laravel from "../../../../public/images/inicio/technologies/lavarel.svg"
import NestJS from "../../../../public/images/inicio/technologies/nestjs.svg"
import NextJS from "../../../../public/images/inicio/technologies/nextjs.svg"
import NodeJS from "../../../../public/images/inicio/technologies/nodejs.svg"
import Javascript from "../../../../public/images/inicio/technologies/javascript.svg"
import Typescript from "../../../../public/images/inicio/technologies/typescript.svg"
import Image from "next/image"

export default function Experience() {
    return (
        <article className={styles.Container}>
            <h1>Experiência</h1>
            <div className={styles.InfoContainer}>
                <p>
                    Desde sempre busco escolher as melhores <strong>TECNOLOGIAS</strong> para o
                    desenvolvimento das <strong>SOLUÇÕES</strong>! Abaixo listo algumas <strong>TECNOLOGIAS</strong> que
                    utilizo no desenvolvimento !
                </p>

            </div>

            <div className={styles.TechnologiesContainer}>
                <section>
                    <span>
                        <Image src="/images/inicio/technologies/react.png" layout="fill" alt="React JS"/>
                    </span>
                    <h2>React JS</h2>
                    <div className={styles.REACTJS}><p>67%</p></div>
                </section>
                <section>
                    <span>
                        <Image src="/images/inicio/technologies/php.png" layout="fill" alt="PHP"/>
                    </span>
                    <h2>PHP</h2>
                    <div className={styles.PHP}><p>66%</p></div>
                </section>
                <section>
                    <span>
                        <Image src="/images/inicio/technologies/react.png" layout="fill" alt="React Native"/>
                    </span>
                    <h2>React Native</h2>
                    <div className={styles.REACTNATIVE}><p>45%</p></div>
                </section>
                <section>
                    <span>
                        <Image src="/images/inicio/technologies/mysql.png" layout="fill" alt="MySQL"/>
                    </span>
                    <h2>MySQL</h2>
                    <div className={styles.MYSQL}><p>57%</p></div>
                </section>
                <section>
                    <span>
                        <Image src={Laravel} layout="fill" alt="Laravel"/>
                    </span>
                    <h2>Laravel</h2>
                    <div className={styles.LARAVEL}><p>75%</p></div>
                </section>
                <section>
                    <span>
                        <Image src={NextJS} layout="fill" alt="NextJS"/>
                    </span>
                    <h2>NextJS</h2>
                    <div className={styles.NEXTJS}><p>64%</p></div>
                </section>
                <section>
                    <span>
                        <Image src="/images/inicio/technologies/html.png" layout="fill" alt="HTML"/>
                    </span>
                    <h2>HTML</h2>
                    <div className={styles.HTML}><p>95%</p></div>
                </section>
                <section>
                    <span>
                        <Image src="/images/inicio/technologies/css.png" layout="fill" alt="CSS"/>
                    </span>
                    <h2>CSS</h2>
                    <div className={styles.CSS}><p>88%</p></div>
                </section>
                <section>
                    <span>
                        <Image src={Javascript} layout="fill" alt="Javascript"/>
                    </span>
                    <h2>Javascript</h2>
                    <div className={styles.JAVASCRIPT}><p>74%</p></div>
                </section>
                <section>
                    <span>
                        <Image src={Typescript} layout="fill" alt="Typescript"/>
                    </span>
                    <h2>Typescript</h2>
                    <div className={styles.TYPESCRIPT}><p>66%</p></div>
                </section>
                <section>
                    <span>
                        <Image src={NodeJS} layout="fill" alt="NodeJS"/>
                    </span>
                    <h2>NodeJS</h2>
                    <div className={styles.NODEJS}><p>28%</p></div>
                </section>
                <section>
                    <span>
                        <Image src={NestJS} layout="fill" alt="NestJS"/>
                    </span>
                    <h2>NestJS</h2>
                    <div className={styles.NESTJS}><p>32%</p></div>
                </section>


            </div>
            <button>Contratar</button>
        </article>
    )
}