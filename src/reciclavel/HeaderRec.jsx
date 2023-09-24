import header from './HeaderRec.module.css'
import { Link } from 'react-router-dom'

function HeaderRec({onButtonClick}){

    return (
        <header className={header.estilo}>
            <section className={header.logo}>
                <a href="/index.html">
                    <img src="./src/images/urbanismo-removebg.png" alt=""/>
                </a>
            </section>

            <section className={header.botao}> 
                <a href="https://franciscobeltrao.1doc.com.br/b.php?pg=o/wp&s=franciscobeltrao" target='_blank'>
                    <button className={header.doc}>1Doc</button>
                </a>
                <Link to={'/'}>
                    <button onClick={onButtonClick} className={header.servico}>Solicite seu Serviço</button>
                </Link>
            </section>
        </header>   
    )
}

export default HeaderRec;