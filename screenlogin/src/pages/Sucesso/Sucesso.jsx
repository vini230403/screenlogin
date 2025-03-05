import { signOut } from "firebase/auth"

import { auth } from "../../firebase/config"

import { useNavigate } from "react-router-dom"

import './Sucesso.css'

const Sucesso = () => {

  const navigate = useNavigate()
  
  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message)
    }
  }


  return (
    <div className="sucesso">
      <h2>Bem-vindo à Minha Aplicação</h2>
      <p>Sucesso.</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

export default Sucesso