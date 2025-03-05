import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import Header from '../../components/Header/Header'
import Loader from "../../components/Loader/Loader"


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)


    try {
      // Realiza o login com email e senha
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      console.log("Login bem sucedido", user)

      setEmail("")
      setPassword("")

      navigate("/sucesso")
    } catch (error) {
      console.error("Erro ao fazer login:", error.message)

      // Trata erros específicos
      if (error.code === "auth/user-not-found") {
        setError("Usuário não encontrado.");
      } else if (error.code === "auth/wrong-password") {
        setError("Senha incorreta.");
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
        <Loader /> // Exibe o loader enquanto o login está em andamento
      ) : (
        <form className="login" onSubmit={handleLogin}>
          <h2>Entrar</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required  />
          </div>
          <button type="submit" className="submit-button"> {loading ? "Entrando..." : "Entrar"}</button>
        </form>
      )}
  </div>
  )
}

export default Login