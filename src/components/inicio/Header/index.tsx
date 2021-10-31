import styles from "./styles.module.scss"
import Button from "../../public/Button";
import {useEffect, useState} from "react";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileMenuStyle, setMobileMenuStyle] = useState("");

    useEffect(() => {
        if (mobileMenu){
            setMobileMenuStyle(styles.MobileMenuOn)
        }else{
            setMobileMenuStyle(styles.MobileMenuOff)
        }
    }, [mobileMenu]);

    function handleShowMenu(){
        setMobileMenu(true)
    }
    function handleHideMenu(){
        setMobileMenu(false)
    }

    return (
        <header className={styles.Container} id="home">
            <div className={styles.TopContainer}>
                <div className={styles.HeaderContainer}>
                    <div className={styles.LogoContainer}>
                        <span>BA</span>
                    </div>
                    <span className={styles.MobileMenuButton}  onClick={handleShowMenu}>|||</span>
                </div>
                <nav className={styles.MenuContainer}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#experience">Experiência</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                        <li><a href="#contact">Contato</a></li>
                        <li><a>Contratar</a></li>
                    </ul>
                </nav>
                <nav className={styles.MobileMenuContainer+" "+mobileMenuStyle}>
                    <span onClick={handleHideMenu}>X</span>
                    <ul>
                        <li><a href="#home" onClick={handleHideMenu}>Home</a></li>
                        <li><a href="#about" onClick={handleHideMenu}>Sobre</a></li>
                        <li><a href="#experience" onClick={handleHideMenu}>Experiência</a></li>
                        <li><a href="#portfolio" onClick={handleHideMenu}>Portfólio</a></li>
                        <li><a href="#contact" onClick={handleHideMenu}>Contato</a></li>
                        <li><a onClick={handleHideMenu}>Contratar</a></li>
                    </ul>
                </nav>

            </div>
            <h1>Olá, me chamo <strong>BRUNO ALBUQUERQUE</strong> <br/>
                Sou desenvolvendor <strong>FULLSTACK</strong>
            </h1>
            <h1>
                <strong>[ REACT + LARAVEL ]</strong></h1>
            <Button>Contratar</Button>

        </header>
    )
}