import {useState} from 'react';
import "./styles.css"

export const BtnFiltro = ({value, children, filterProductsList}) => {
    
    
    
    return(
        <>
            <p onClick={() => filterProductsList(value)}>
             {children}
            </p>
        </>
    )
}


