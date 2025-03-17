import { NavLink } from 'react-router-dom'

import Header from "../../components/Header/Header"
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Header/>
      <main className="home-main">
        <section className="hero-section">
          <h1>Bem vindo</h1>
          <p>Está é a Home. Faça o seu login ou seu cadastro</p>
          <NavLink to="/cadastrar" className="navlink">Cadastrar</NavLink>
          <NavLink to="/login" className="navlink">Login</NavLink>
        </section>
      </main>
    </div>
      
    
  )
}

export default Home