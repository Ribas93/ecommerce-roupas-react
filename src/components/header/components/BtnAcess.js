const BtnAcess = ({data, setFiltroData} ) => {
    let filtroData = data.filter((obj) => obj.secao === "Acessorios")
    return(
        <>
        <p onClick={() => setFiltroData(filtroData)} className="header_acessorio">Acessorios</p>
        </>
    )
}

export default BtnAcess;