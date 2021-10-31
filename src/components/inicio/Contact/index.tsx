import styles from "./styles.module.scss"
import {AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai"
import {RiFacebookCircleLine, RiGithubLine} from "react-icons/ri"
import {FiTwitter, FiLinkedin} from "react-icons/fi"
import Button from "../../public/Button";

export default function Contact() {
    const whatsAppText = 'Gostaria de ser atendido pelo WhatsApp'
    const whatsAppUrl = "https://api.whatsapp.com/send?phone=5561993972521&text="+whatsAppText
    return (
        <article className={styles.Container} id="contact">
            <h1>Contato</h1>
            <p className={styles.InfoContainer}>
                Abaixo você encontra algumas formas para se contactar!
                Fique a vontade para entrar em contato por <strong>ONDE</strong> e <strong>QUANDO QUISER</strong>!
            </p>
            <div className={styles.ContactsContainer}>
                <a href={whatsAppUrl} target="_blank">
                    <section>
                        <span>
                        <AiOutlineWhatsApp color="#FF026C"/>
                            </span>
                        <h2>WhatsApp</h2>
                    </section>
                </a>
                <a href="https://www.facebook.com/bruninho.alb/" target="_blank">
                    <section>
                        <span>
                        <RiFacebookCircleLine color="#FF026C"/>
                            </span>
                        <h2>Facebook</h2>
                    </section>
                </a>
                <a href="https://www.instagram.com/albuquerque_bruno/" target="_blank">
                    <section>
                        <span>
                        <AiOutlineInstagram color="#FF026C"/>
                            </span>
                        <h2>Instagram</h2>
                    </section>
                </a>
                <a href="" target="_blank">
                    <section>
                        <span>
                        <FiTwitter color="#FF026C"/>
                            </span>
                        <h2>Twitter</h2>
                    </section>
                </a>
                <a href="https://github.com/bruninalb" target="_blank">
                    <section>
                        <span>
                        <RiGithubLine color="#FF026C"/>
                            </span>
                        <h2>GitHub</h2>
                    </section>
                </a>
                <a href="https://www.linkedin.com/in/bruno-albuquerque-7112041b1/" target="_blank">
                    <section>
                        <span>
                        <FiLinkedin color="#FF026C"/>
                            </span>
                        <h2>LinkedIn</h2>
                    </section>
                </a>
            </div>

        </article>
    )
}