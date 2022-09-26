import {useState} from 'react'
import Cards from './components/divCards';
import Carrinho from './components/divCarrinho';

const Main = ({setCarrinho, carrinho, data, filtroData}) => {
    return(
    <>
        <div className='cardsCarrinho'>
            <Cards filtroData={filtroData}/>
            <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
        </div>
     </>
    )
}

export default Main;