import { useState } from "react"

const Carrinho = ({carrinho, setCarrinho, data, setFiltroData}) => {

     // ** carrinho [e] um array de obj, com titulo: data.titulo, id: posicao do obj no array e valor: data.valor 
    const [visualizarCarrinho, setVisualizarCarrinho] = useState(true)
  
    // valor que esta sendo digitado no input
    const [valorInp, setValorInp] = useState("")
    
    // filtrar data atraves do valorInp, o resultado do filtro sera utilizado no onClick do carrinho_inpBtn_btn para mudar a state setFiltroData(lista dos cards que aparece na tela)
    const newData = data.filter((obj) => obj.titulo.toLowerCase().includes(valorInp.toLowerCase()) || obj.secao.toLowerCase().includes(valorInp.toLowerCase()))

    // quando n tem nenhum item adicionado no carrinho, verifica com carrinho.length!
    const CarrinhoVazio = () =>{ return ( <>
                            <div className="carrinho_cesta_vazia">
                            <h3>Carrinho Vazio</h3>
                            <p>Adicione Itens.</p>
                            </div>
                        </>)}

    // quando tem item no carrinho, (carrinho.length > 0)
    const CarrinhoCheio = () => { 
       
        // copia do array que esta no carrinho para ser utilizado quando for retirar algum item do array pelo btn de retirar o produto
        let newCarr = [...carrinho]

        return ( <>
                            {carrinho.map((objarr) => {

                                // pegando o objeto correspondente ao titulo que esta no arr do carrinho 
                                let newData = data.filter(obj => obj.titulo === objarr.titulo)
                                return(
                                    // mini card dentro do carrinho contendo img do prod, titulo, valor e um btn para retirar prod (no btn utilizei splice da copia do carrinho, indentificando a posicao do item pelo indexOf)
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
                        <input type='text' placeholder="Digite aqui sua pesquisa" className="carrinho_inpBtn_inp" 
                        value={valorInp} onChange={(e) => setValorInp(e.target.value)} />
                        <button className="carrinho_inpBtn_btn" onClick={() => setFiltroData(newData)}>Pesquisar</button>
                    </div>
                    <div className="carrinho_cesta">
                        <button className="carrinho_cesta_btn" onClick={() => setVisualizarCarrinho(!visualizarCarrinho)}>
                            Carrinho De Compra
                        </button>

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
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </>)}


export default Carrinho