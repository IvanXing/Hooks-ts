import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

function App() {
  const [showMouse, setShowMouse] = useState(true);
  const [showLike, setShowLike] = useState(true);
  return (
    <div className="App">
      <Hello message="helloWorld" />
      <div>
        <button onClick={() => { setShowMouse(!showMouse) }}>toggle Mouse</button>
        {
          showMouse && <MouseTracker />
        }
      </div>
      <div>
        <button onClick={() => { setShowLike(!showLike) }}>toggle Like</button>
        {
          showLike && <LikeButton />
        }
      </div>

    </div>
  );
}

export default App;
