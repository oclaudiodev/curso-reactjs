import { Link } from 'react-router-dom'
import './index.scss'


export default function Eventos() {

    function clicou(){
        alert('Oie usuario acaba de clicar')
    }

    function movimentouMouse(){
        alert('Movimentou o mouse sobre o Parágrafo')
    }

    function alterouValor(e){
        let novoValor = e.target.value;
        alert('Oi usuário acaba de alterar o valor do input/select para: '+ novoValor)
    }

    function alterouCheck(e){
        let novoValor = e.target.checked
        alert('Oi usuário acaba de alterar o valor do input[checkbox/radio] para: '+ novoValor)
    }

    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>ReactJS - Eventos</h1>
            </header>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p onMouseMove={movimentouMouse}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, mollitia? Minus reiciendis qui at necessitatibus, possimus voluptatibus ex odit sequi architecto? Corrupti dolore in est eaque, quaerat quas aliquid ratione!</p>

                <input onChange={alterouValor} type='text' placeholder='Digite aqui alguma coisa'></input>

                <textarea onChange={alterouValor} placeholder='Digite Aqui'></textarea>

                <select onChange={alterouValor}>
                    <option>Selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>
                </select>
                <div className='grupo'>
                    <input type='checkbox' onChange={alterouCheck}></input>Opção 1
                    <input type='checkbox'></input>Opção 2
                </div>

                <div className='grupo'>
                    <input name='gpo' type='radio' onChange={alterouCheck}></input>Opção 1
                    <input name='gpo' type='radio'></input>Opção 2
                </div>

                <button onClick={clicou}>Clique Aqui</button>
                
            </section>
            <Link to = '/eventos'>pagInicial</Link>
        </div>
    )
}