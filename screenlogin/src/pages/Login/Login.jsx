import Header from '../../components/Header/Header'

import './Login.css'

const Login = () => {
  return (
    <div className="form-container">
    <Header />
    <form className="login">
      <h2>Entrar</h2>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" />
      </div>
      <button type="submit" className="submit-button">Entrar</button>
    </form>
  </div>
  )
}

export default Login