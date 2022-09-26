const BtnCalc = ({data, setFiltroData} ) => {
    let filtroData = data.filter((obj) => obj.secao === "Calcados")
    return(
        <>
        <p onClick={() => setFiltroData(filtroData)} className="header_calcados">Calcados</p>
        </>
    )
}

export default BtnCalc;