import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePositon from './hooks/useMousePosition';

function App() {
  const [showMouse, setShowMouse] = useState(true);
  const [showLike, setShowLike] = useState(true);
  const positions = useMousePositon();
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
      <h3>X: {positions.x}, Y : {positions.y}</h3>
    </div>
  );
}

export default App;
