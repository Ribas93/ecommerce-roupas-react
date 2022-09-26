import {useState} from 'react';
import BtnCami from './components/BtnCamiseta';
import BtnAcess from './components/BtnAcess';
import BtnTodos from './components/BtnTodos';
import BtnCalc from './components/BtnCalcados';




const Header = ({data, setFiltroData}) => {

    return (
        <>
        <div className='header'>
            <h2 className='header_titulo'>Weartake</h2>
            <div className='header_div'>
                <BtnTodos data={data} setFiltroData={setFiltroData}/>
                <BtnAcess data={data} setFiltroData={setFiltroData}/>
                <BtnCami data={data} setFiltroData={setFiltroData}/>
                <BtnCalc data={data} setFiltroData={setFiltroData}/>
            </div>
        </div>
        

        </>
    )
}


export default Header