import { useState } from "react"
import "./styles.css";
import {CarrinhoVazio } from "../3.3-CarriVazio";
import {CarrinhoInf } from "../3.2-infoCarrinho";
import {CardCarrinho } from "../3.1-CardCarrinho";


export const Carrinho = ({carrinho, setCarrinho, data, setFiltroData}) => {

    const [visualizarCarrinho, setVisualizarCarrinho] = useState(true)
    const [valorInp, setValorInp] = useState("")
    const newData = data.filter((obj) => obj.titulo.toLowerCase().includes(valorInp.toLowerCase()) || obj.secao.toLowerCase().includes(valorInp.toLowerCase()))
    
    const removerproduto = (produtoId) => {setCarrinho(carrinho.filter(produto => produto.id !== produtoId))}


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
                                    { carrinho.length === 0 
                                      ? <CarrinhoVazio/> 
                                      : carrinho.map((produto) => { 
                                        return(
                                                <div key={`carrinho ${produto.id}`} className="card_carrinho">
                                                    <CardCarrinho img={produto.img} titulo={produto.titulo} valor={produto.valor} removerproduto={removerproduto} id={produto.id} />
                                                </div>
                                        )})    
                                    }
                                </div>

                                {carrinho.length !== 0 && <CarrinhoInf carrinho={carrinho} setCarrinho={setCarrinho} data={data}/>}
                            </>
                        }
                    </div>
                </div>
            </>)}