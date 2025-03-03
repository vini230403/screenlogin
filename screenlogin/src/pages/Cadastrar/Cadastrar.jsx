import { NavLink } from "react-router-dom"

import './Cadastrar.css'
import Header from "../../components/Header/Header"

const Cadastrar = () => {
  return (
    <div className="form-container">
      <Header />
      <form className="cadastro">
        <h2>Cadastre-se</h2>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Digite seu nome" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastrar