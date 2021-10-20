import styles from "./styles.module.scss"

export default function Header() {
    return (
        <header className={styles.Container}>
            <div className={styles.TopContainer}>
                <div className={styles.LogoContainer}>
                    <span>BA</span>
                </div>
                <nav className={styles.MenuContainer}>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Sobre</a></li>
                        <li><a>Experiência</a></li>
                        <li><a>Portfólio</a></li>
                        <li><a>Contato</a></li>
                        <li><a>Contratar</a></li>
                    </ul>
                </nav>

            </div>
            <h1>Olá, me chamo <strong>BRUNO ALBUQUERQUE</strong> <br/>
                Sou desenvolvendor <strong>FULLSTACK</strong>
            </h1>
            <h1>
                <strong>[ REACT + LARAVEL ]</strong></h1>
            <button>Contratar</button>

        </header>
    )
}