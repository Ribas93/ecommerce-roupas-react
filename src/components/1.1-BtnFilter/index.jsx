import {useState} from 'react';
import "./styles.css"

export const BtnFiltro = ({value, children, filterProductsList}) => {
    
    
    
    return(
        <>
            <p className='link' onClick={() => filterProductsList(value)}>
             {children}
            </p>
        </>
    )
}


