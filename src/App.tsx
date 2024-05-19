import React from 'react';
import { TableComp } from './components/FuncComp/TableComp';
import { Navbar } from './components/NavBarComp';
import { MainRouter } from './routing/MainRouter';

const App: React.FC = () => {
  return (    <>
    <Navbar />
    <MainRouter />
  </> 
  );
};

export default App;