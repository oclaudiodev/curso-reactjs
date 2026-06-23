import './contato.scss'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Contato() {


    return (
        <div className='pagContato pagina'>
            <header className='cabecalho'>
                <Link to={"/"}>
                    <FaArrowLeft className="voltar" />
                </Link>
                <h1>Contato</h1>
            </header>

            <section className='secao'>
                <h1>Entre em contato</h1>
                <img className='icone' src='/assets/images/contato.png' />
            </section>

        </div>
    )
}