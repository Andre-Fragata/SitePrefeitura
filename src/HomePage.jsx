import Banner from './pages/mainpage/Banner'
import Sobre from './pages/mainpage/Sobre'
import Servicos from './pages/mainpage/Servicos'
import './global.css'
import Header from './pages/mainpage/Header'
import Footer from './pages/mainpage/Footer'

function HomePage() {

  return (
    <div>
      <Header/>
      <Banner/>
      <Sobre/>
      <Servicos/>
      <Footer/>
    </div>
  );
}


export default HomePage;