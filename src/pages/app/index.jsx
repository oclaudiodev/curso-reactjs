import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1>Estudos de ReactJS</h1>
      </header>

      <section className='secao'>
        <h1>Estudando ReactJS</h1>

        <input type='text' placeholder='Digite aqui'></input>
        <br></br><br></br>
        <select>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
        <br></br><br></br>
        <button> Clique aqui</button>

        <ul>
          <li>
            <Link to="/contato">Contato</Link>
            <Link to = '/eventos'>Eventos</Link>
          </li>
        </ul>
      </section>

    </div>
  );
}
