import React, { Fragment } from 'react';
import './App.css';
import Nav from './componentes/Nav';
import Carrossel from './componentes/carrossel';
import Album from './componentes/album';
import Contato from './componentes/Contato/contato'


function App() {
  return (
    <Fragment>
      <Nav />
      <Carrossel />
      <Album />
      <Contato />
    </Fragment>
  );
}

export default App;