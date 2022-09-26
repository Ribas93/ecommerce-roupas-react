const BtnTodos = ({data, setFiltroData}) => {

    return(
        <>
        <p onClick={() => setFiltroData(data)} className="header_todos">Todos</p>
        </>
    )
}

export default BtnTodos;