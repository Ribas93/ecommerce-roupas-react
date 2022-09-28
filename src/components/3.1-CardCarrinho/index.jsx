import "./styles.css"

export const CardCarrinho = ({img, id, titulo, valor,removerproduto}) => {

                return (
                            <>
                                <div className="cardCarrinho">
                                   <div className="cardCarrinho_DivImg">
                                        <img src={img} alt="img carrinho" className="cardCarrinho_img"/>
                                    </div>
                                    <div className="cardCarrinho_descricao">
                                        <h4 className="cardCarrinho_titulo" >{titulo}</h4>
                                        <p className="cardCarrinho_valor">R${valor}.00</p>
                                        <p className="cardCarrinho_removerProd"
                                        onClick={() =>{removerproduto(id)}}>Remover produto
                                        </p>
                                    </div> 
                                </div>
                            </>
                        )
}