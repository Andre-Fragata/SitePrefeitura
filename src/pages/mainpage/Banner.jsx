import banner from './banner.module.css'

function Banner(){
    return(
        <div className={banner.estilo}>
            <div className={banner.sobre}>
                <img src="./src/images/banner.jpg" alt="" />
                <p>transformando a cidade <br/> dos sonhos em realidade</p>
            </div>
        </div>
    )
}

export default Banner;