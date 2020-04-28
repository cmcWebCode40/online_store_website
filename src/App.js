import React from 'react';
import ContextProvider from './components/context/ContextApi';
import Layouts from './layouts/Layouts';
import './scss/styles.scss';

const App = () => {
  return (
    <ContextProvider>
      <div className="app">
        <Layouts />
      </div>
    </ContextProvider>
  );
}

export default App;
