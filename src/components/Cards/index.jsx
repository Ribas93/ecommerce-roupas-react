import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";


export const Cards = ({filtroData, carrinho, setCarrinho}) => {
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
                <p onClick={() => setCarrinho([...carrinho,{titulo:obj.titulo, id: uuidv4(), valor: obj.valor}])} className="card_link paddingLeft">adicionar ao carrinho</p>
              </li> 
            )})} 
          </ul>
        </>
    )
}
