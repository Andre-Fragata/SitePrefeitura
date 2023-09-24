import './global.css'
import MainLampada from './pages/iluminacao/MainLampadaPage';
import HeaderRec from './reciclavel/HeaderRec'
import FooterRec from './reciclavel/FooterRec'
import GoogleMaps from './reciclavel/GoogleMaps'
import lampada from './Lighting.module.css'

function Lighting (){
    return(
        <div className={lampada.estilo}>
        <HeaderRec/>
        <section className={lampada.main}>
            <MainLampada/>
            <GoogleMaps/>
        </section>
        <FooterRec/>
        </div>
    )
}

export default Lighting;