import "./styles.css"

export const CarrinhoInf = ({carrinho, setCarrinho, data}) => {
    
    return(
            <div className="carrinho_cesta_inf">
                <div  className="carrinho_cesta_inf_div">
                    <p className='carrinho_cesta_inf_div_chave'>Quantidade:</p>
                    <p>{carrinho.length}</p>
                </div>
                <div className="carrinho_cesta_inf_div">
                    <p className='carrinho_cesta_inf_div_chave'>Valor:</p>
                    <p>{carrinho.length === 0 ? `R$ 0.00`: `R$ ${carrinho.reduce((inicio,obj) => inicio + obj.valor ,0)}.00`}</p>
                </div>
                <button className="carrinho_cesta_inf_limpar" onClick={() => setCarrinho([])}>Limpar Produtos</button>
            </div>
    )
}