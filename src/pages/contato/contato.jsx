import './contato.css'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Contato(){


    return (
        <div className='pagContato'>
            <Link to = {"/"}>
                <FaArrowLeft className="voltar" />
            </Link>
            <h1>Contato</h1>
            <img className='icone' src='/assets/images/contato.png'/>
        </div>
    )
}