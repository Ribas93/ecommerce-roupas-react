import { useState } from "react"

const Carrinho = ({carrinho, setCarrinho}) => {
    
    
    return (
        <>
        <div className="carrinho">
            <div className="carrinho_inpBut">
                <input type='text' placeholder="Digite aqui sua pesquisa" className="carrinho_inpBtn_inp"/>
                <button className="carrinho_inpBtn_btn">Pesquisar</button>
            </div>
            <div className="carrinho_cesta">
                <button className="carrinho_cesta_btn"></button>
                <div className="carrinho_cesta_div">
                    {carrinho.length === 0 && <p>ola</p>}  
                </div>
            </div>

        </div>
        </>
    )
}

/*
carrinho
carrinho_inpBut
carrinho_inpBtn_inp
carrinho_inpBtn_btn
carrinho_cesta
carrinho_cesta_btn
carrinho_cesta_div

*/

export default Carrinho