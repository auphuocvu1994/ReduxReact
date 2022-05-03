import React from 'react';
// import { Counter } from './features/counter/Counter';
import GetListItem from './components/ListItem/ListItem';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GetListItem></GetListItem>
    </div>
  );
}

export default App;
