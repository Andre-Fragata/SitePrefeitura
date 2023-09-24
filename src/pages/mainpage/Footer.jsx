import footer from './Footer.module.css'

function Footer() {
    return(
        <footer className={footer.rodapé}>
            <section className={footer.estilo}>
            <div className={footer.logo}>
                <img src="./src/images/urbanismo-removebg.png" alt="" />
            </div>
            <div className={footer.info}>
                <h3>Secretaria Municipal de Viação e Obras</h3>
                <p>Rua Octaviano Teixeira dos Santos, <br/> 1000 <br/> Francisco Beltrão - PR</p>
            </div>
            </section>
        </footer>
    )
}

export default Footer;