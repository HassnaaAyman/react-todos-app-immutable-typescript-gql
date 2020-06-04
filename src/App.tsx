import React from 'react';
import './App.css';
import Todos from './todos';
import UserData from './components/userData';

function App() {
  return (
    <div className="App">
        <Todos/>
        <UserData/>
    </div>
  );
}

export default App;
