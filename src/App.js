import data from './data';
import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { Carrinho } from './components/Carrinho';
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
            <div>
              <Cards filtroData={filtroData} carrinho={carrinho} setCarrinho={setCarrinho}/>
              <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} data={data} setFiltroData={setFiltroData}/>
            </div>
          </>
  );
}

export default App;
