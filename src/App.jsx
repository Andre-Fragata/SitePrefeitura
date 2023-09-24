import Rotas from './Routes'
import Header from './pages/mainpage/Header'
import Footer from './pages/mainpage/Footer'
import './global.css'
import app from './App.module.css'

function App() {

  return (
    <div className={app.div}>
      <main className={app.rotas}>
        <Rotas/>
      </main>
    </div>
  );
}


export default App;
