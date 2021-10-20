import styles from "./styles.module.scss"
import Link from "next/link"

export default function Cookies(){
    return (
        <div className={styles.Container}>

            <p>Cookies: a gente guarda estatísticas de visitas para melhorar sua experiência de navegação, saiba mais em nossas <Link href="/politicas-de-privacidade">Políticas de Privacidade</Link>.</p>
            <button>Eu aceito</button>
        </div>
    )
}