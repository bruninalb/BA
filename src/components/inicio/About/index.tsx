import styles from "./styles.module.scss"
import Button from "../../public/Button";

export default function About() {
    return (
        <article className={styles.Container} id="about">
            <h1>Sobre</h1>
            <div className={styles.InfoContainer}>
                <span>
                    <span />
                </span>
                <p>
                    Me chamo <strong>BRUNO ALBUQUERQUE</strong>, tenho 25 anos e moro em <strong>BRASÍLIA</strong>.

                    Me envolvi no mundo da tecnologia desde cedo, aos 11 anos quando ganhei

                    meu computador, e desde essa época já tive o contato com o <strong>HTML [ linguagem

                    para estruturar o corpo do WEBSITE ]</strong> e sempre estive em evolução constante

                    junto com a <strong>TECNOLOGIA</strong>.

                    Espero a cada dia estar mais perto da <strong>TECNOLOGIA</strong> e sempre estar podendo

                    trazer para os meus <strong>CLIENTES</strong> sempre a melhor <strong>SOLUÇÃO</strong>!
                </p>

            </div>
            <Button style={"white1"}>Contratar</Button>
        </article>
    )
}