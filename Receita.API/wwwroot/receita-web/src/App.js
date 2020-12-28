/* React */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Views */
import ListagemReceitaView from './Views/ListagemReceitaView.js'
import CadastrarEditarReceitaView from './Views/CadastrarEditarReceitaView.js'
import VisualizarReceitaView from './Views/VisualizarReceitaView.js'
import NaoEncontradoView from './Views/NaoEncontradoView.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/404' component={NaoEncontradoView} />
        <Route exact path='/cadastrar' component={CadastrarEditarReceitaView} />
        <Route exact path='/editar/:id' component={CadastrarEditarReceitaView} />
        <Route exact path='/visualizar/:id' component={VisualizarReceitaView} />
        <Route exact path='/' component={ListagemReceitaView} />
        <Route component={NaoEncontradoView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;