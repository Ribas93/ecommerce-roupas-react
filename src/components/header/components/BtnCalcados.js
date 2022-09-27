const BtnCalc = ({data, setFiltroData} ) => {
    let filtroData = data.filter((obj) => obj.secao === "Conjuntos")
    return(
        <>
        <p onClick={() => setFiltroData(filtroData)} className="header_calcados">Conjuntos</p>
        </>
    )
}

export default BtnCalc;