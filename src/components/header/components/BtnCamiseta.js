const BtnCami = ({data, setFiltroData}) => {
  let filtroData = data.filter((obj) => obj.secao === "Camisetas")
    return(
        <>
        <p onClick={() => setFiltroData(filtroData)} className="header_Camisetas">Camisetas</p>
        </>
    )
}

export default BtnCami;