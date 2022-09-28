import data from './data';
import { Header } from './components/1-Header';
import { Cards } from './components/2-Cards';
import { Carrinho } from './components/3-Carrinho';
import { useCallback, useState } from 'react';

function App() {
  
  const [carrinho, setCarrinho] = useState([])
  const [filtroData, setFiltroData] = useState(data)

  const filterProductsList = useCallback((filter) => {
      if (!filter)
      {
        setFiltroData(data)
        return
      }

      setFiltroData(data.filter(product => product.secao === filter))
    
  },[data])

  return (
          <>
            <Header filterProductsList={filterProductsList} data={data} setFiltroData={setFiltroData}/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <Cards filtroData={filtroData} carrinho={carrinho} setCarrinho={setCarrinho}/>
              <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} data={data} setFiltroData={setFiltroData}/>
            </div>
          </>
  );
}

export default App;
