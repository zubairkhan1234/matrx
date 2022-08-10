
import React from 'react';
import './App.css';
import Navigation from './navigation/Navigation';
import { GlobalStateProvider } from './context/context';

function App() {
  return (

    <GlobalStateProvider>
      <Navigation />
    </GlobalStateProvider>

  );
}

export default App;