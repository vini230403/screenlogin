
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Cadastrar from "./pages/Cadastrar/Cadastrar";



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
