import React from 'react';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="App">
     <Hello message="helloWorld" />
     <LikeButton />
    </div>
  );
}

export default App;
