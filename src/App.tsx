import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
// import useMousePositon from './hooks/useMousePosition';
import withLoader from './components/withLoader'

interface IShowResult {
  message: string;
  status: string;
}

const DogShow: React.FC<{data: IShowResult}> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} />
    </>
  )
}

function App() {
  const [showMouse, setShowMouse] = useState(true);
  const [showLike, setShowLike] = useState(true);
  // const positions = useMousePositon();
  const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
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
      {/* <h3>X: {positions.x}, Y : {positions.y}</h3> */}
      <WrappedDogShow />
    </div>
  );
}

export default App;
