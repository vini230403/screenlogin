import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <h1>Minha Aplicação</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/cadastrar">Cadastrar</a></li>
          <li><a href="/login">Entrar</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header