import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { auth } from "../../firebase/config"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import './Cadastrar.css'
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"



const Cadastrar = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleCadastro = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Cria usuário com email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
  
      // Atualiza o perfil do usuário (displayName)
      await updateProfile(user, {displayName})
      
      console.log("Usuário cadastrado com sucesso:", user)


      // Limpa os campos após o cadastro bem-sucedido
      setDisplayName("")
      setEmail("")
      setPassword("")

      // Redireciona para a página de login
      navigate("/login")

    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.message)
  
      if (error.code === "auth/email-already-in-use") {
        setError("O email já está cadastrado.");
        setEmail("")
      } else if (error.code === "auth/weak-password") {
        setError("A senha deve ter pelo menos 6 caracteres.");
        setPassword("")
      } else {
        setError("Ocorreu um erro inesperado. Tente novamente.");
      } 
    } finally {
      setLoading(false)
    }
  }  


  
  return (
    <div className="form-container">
      <Header />
      {loading ? (
        <Loader /> // Exibe o loader enquanto o cadastro está em andamento
      ) : (
        <form className="cadastro" onSubmit={handleCadastro}>
          <h2>Cadastre-se</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Digite seu nome" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="submit-button">{loading ? "Cadastrando..." : "Cadastrar"}</button>
        </form>
      )}
    </div>
  )
}

export default Cadastrar