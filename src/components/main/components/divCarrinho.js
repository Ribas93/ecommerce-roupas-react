import { useState } from "react"

const Carrinho = ({carrinho, setCarrinho, data}) => {

    const [visualizarCarrinho, setVisualizarCarrinho] = useState(true)
    
    const CarrinhoVazio = () =>{ return ( <>
                            <div className="carrinho_cesta_vazia">
                            <h3>Carrinho Vazio</h3>
                            <p>Adicione Itens.</p>
                            </div>
                        </>)}


    const CarrinhoCheio = () => { 
        
        let newCarr = [...carrinho]
        return ( <>
                            {carrinho.map((objarr) => {
                                let newData = data.filter(obj => obj.titulo === objarr.titulo)
                                return(
                                        <div key={`carrinho ${objarr.id}`} className="carrinho_cesta_cheia">
                                            <div className="carrinho_cesta_cheia_divImg">
                                                <img src={newData[0].img} alt="img carrinho" className="carrinho_cesta_cheia_img"/>
                                            </div>

                                            <div className="carrinho_cesta_cheia_conteudo">
                                                <h4 className="carrinho_cesta_cheia_conteudo_titulo">{newData[0].titulo}</h4>
                                                <p className="carrinho_cesta_cheia_conteudo_valor">R$ {newData[0].valor}.00</p>
                                                <p onClick={() =>{ newCarr.splice(newCarr.indexOf(objarr), 1); setCarrinho(newCarr)}} className="carrinho_cesta_cheia_conteudo_link">Remover produto</p>
                                            </div> 
                                        </div>
                                    
                                )})}
                        </>
                        )}


    return (
        <>
        <div className="carrinho">
            <div className="carrinho_inpBut">
                <input type='text' placeholder="Digite aqui sua pesquisa" className="carrinho_inpBtn_inp"/>
                <button className="carrinho_inpBtn_btn">Pesquisar</button>
            </div>
            <div className="carrinho_cesta">
                <button className="carrinho_cesta_btn" onClick={() => setVisualizarCarrinho(!visualizarCarrinho)}>Carrinho De Compra</button>
                {visualizarCarrinho === true &&
                <>
                    <div className="carrinho_cesta_div">
                        {carrinho.length === 0 ? <CarrinhoVazio/> : <CarrinhoCheio/>}  
                    </div>
                    {carrinho.length !== 0 &&
                    <div className="carrinho_cesta_inf">
                        <div  className="carrinho_cesta_inf_div">
                            <p className='carrinho_cesta_inf_div_chave'>Quantidade:</p>
                            <p>{carrinho.length}</p>
                        </div>
                        <div className="carrinho_cesta_inf_div">
                            <p className='carrinho_cesta_inf_div_chave'>Valor:</p>
                            <p>{carrinho.length === 0 ? `R$ 0.00`: `R$ ${carrinho.map((obj) => obj.valor).reduce((inicio, valor) => inicio + valor)}.00`}</p>
                        </div>
                        <button className="carrinho_cesta_inf_limpar" onClick={() => setCarrinho([])}>Limpar Produtos</button>
                    </div>}
                </>
                }
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