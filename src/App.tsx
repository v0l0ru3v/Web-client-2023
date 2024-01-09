import React from 'react';
import { TableComp } from './components/TableComp';
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