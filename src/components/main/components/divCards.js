import { useState } from "react";


const Cards = ({filtroData}) => {
    return(
        <>
          <ul className="div_card">
            {filtroData.map((obj) => {
              return(
              <li className="card" key={filtroData.indexOf(obj)}>
                <div className="card_img_div">
                  <img src={obj.img} className="card_img" alt="img Card"/>
                </div>
                <button className="card_btn paddingLeft">{obj.secao}</button>
                <h3 className="card_nome paddingLeft">{obj.titulo}</h3>
                <p className="card_descricao paddingLeft">{obj.descricao}</p>
                <p className="card_valor paddingLeft" >R$ {obj.valor}.00</p>
                <p className="card_link paddingLeft">adicionar ao carrinho</p>
              </li> 
            )})} 
          </ul>
        </>
    )
}


export default Cards;