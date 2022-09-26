import data from './data';
import Header from './components/header';
import Main from './components/main';
import { useState } from 'react';
function App() {
  const [carrinho, setCarrinho] = useState([])
  const [filtroData, setFiltroData] = useState(data)
  return (
    <>
    <Header data={data} setFiltroData={setFiltroData}/>
    <Main carrinho={carrinho} setCarrinho={setCarrinho} data={data} filtroData={filtroData}/>
    </>
  );
}

export default App;
