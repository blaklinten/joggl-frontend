import React from 'react';
import './App.css';
//import { Entries } from './Entries';
import { Header } from './Header.js';
import { Body } from './Body.js';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Joggl!"/>
      <Body/>
    </div>
  );
};

export default App;
