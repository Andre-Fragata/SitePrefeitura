import servicos from './Servicos.module.css'
import React from 'react';
import { Link } from 'react-router-dom'; 

function Servicos(props, forwardeRef){
    return(
        <section ref={forwardeRef} className={servicos.estilo}>
            <h1 >Nossos Serviços</h1>
            <article className={servicos.iluminacao}>
                <Link to="/Lampada">
                <a href="" target='_blank'>
                    <img src="./src/images/IMAGENS SITE SMO/1.png" alt="" />
                    <p><span className={servicos.IL1}>ILUMINAÇÃO PÚBLICA</span> <br/> <br/><span className={servicos.pIP}>Serviço de substituição de lampadas e <br/> demais componentes de iluminação.</span></p>
                </a>
                </Link>
            </article> 
            <article className={servicos.lote}>
                <a href="" target='_blank'>
                    <img src="./src/images/IMAGENS SITE SMO/2.png" alt="" />    
                    <p><span className={servicos.IL1}>ILUMINAÇÃO PÚBLICA</span> <br/> <br/><span className={servicos.pIP}>Serviço de substituição de lampadas e <br/> demais componentes de iluminação.</span></p>
                </a>
            </article> 
            <article className={servicos.calcada}>
                <a href="" target='_blank'>
                    <img src="./src/images/IMAGENS SITE SMO/3.png" alt="" />
                    <p><span className={servicos.IL1}>ILUMINAÇÃO PÚBLICA</span> <br/> <br/><span className={servicos.pIP}>Serviço de substituição de lampadas e <br/> demais componentes de iluminação.</span></p>
                </a>
            </article> 
            <article className={servicos.drenagem}>
                <a href="" target='_blank'>
                    <img src="./src/images/IMAGENS SITE SMO/4.png" alt="" />
                    <p><span className={servicos.IL1}>ILUMINAÇÃO PÚBLICA</span> <br/> <br/><span className={servicos.pIP}>Serviço de substituição de lampadas e <br/> demais componentes de iluminação.</span></p>
                </a>
            </article> 
        </section>
    )
}

export default React.forwardRef(Servicos);



