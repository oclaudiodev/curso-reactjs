import './index.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>Estudos de ReactJS</h1>
      <br></br>
      <h2>VAPO</h2>
      <ul>
        <li>
          <Link to = "/contato">Contato</Link>  
        </li>
      </ul>
    </div>
  );
}
