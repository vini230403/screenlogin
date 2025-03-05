
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import ProtectedRoute from "./components/ProtectedRoute";
import Sucesso from "./pages/Sucesso/Sucesso";



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sucesso" element={
            <ProtectedRoute>
              <Sucesso />
            </ProtectedRoute>
          }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
