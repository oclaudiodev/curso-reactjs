import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './pages/app/index';
import Contato from './pages/contato/contato';
import NaoEncontrado from "./pages/naoEncontrado";
import Eventos from "./pages/eventos";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/contato' element={<Contato />} />
        <Route path="/eventos" element = {<Eventos/>}/>      
        <Route path = '*' element = {<NaoEncontrado/>}/>
      </Routes>
    </BrowserRouter>
  )
}
