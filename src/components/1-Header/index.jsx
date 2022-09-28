import {useState} from 'react';
import {BtnFiltro} from '../1.1-BtnFilter'; 
import "./styles.css"



export const Header = ({filterProductsList, data, setFiltroData}) => {

    return(
            <>
                <div className='header'>
                    <h2 className='header_titulo'>Weartake</h2>
                    <div className='header_div_BtnFiltro'>   
                        <BtnFiltro filterProductsList={filterProductsList}>Todos</BtnFiltro>
                        <BtnFiltro value={'Camisetas'} filterProductsList={filterProductsList}>Camisetas</BtnFiltro>
                        <BtnFiltro value={'Conjuntos'} filterProductsList={filterProductsList}>Conjuntos</BtnFiltro>
                        <BtnFiltro value={'Acessorios'} filterProductsList={filterProductsList}>Acessorios</BtnFiltro>
                    </div>
                </div>

        
        

            </>
    )
}


