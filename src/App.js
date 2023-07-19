import React from 'react';

import './App.css';

import Topo from './componentes/Topo';
import SecaoCapa from './componentes/Conteudo/SecaoCapa';
import SecaoProdutos from './componentes/Conteudo/SecaoProdutos';
import SecaoSobre from './componentes/Conteudo/SecaoSobre';
import SecaoContato from './componentes/Conteudo/SecaoContato';
import Rodape from './componentes/Rodape';


function App() {
  return (
    <div>
      <Topo />
      <SecaoCapa/>
      <SecaoProdutos/>
      <SecaoSobre/>
      <SecaoContato/>
      <Rodape/>
    </div>
  )
}

export default App;