import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
// import useMousePositon from './hooks/useMousePosition';
import withLoader from './components/withLoader'

import useURLLoader from './hooks/useURLLoader';

// 接口返回值是
// message: "https://images.dog.ceo/breeds/poodle-toy/n02113624_836.jpg"
// status: "success"
interface IShowResult {
  message: string;
  status: string;
}

// const DogShow: React.FC<{data: IShowResult}> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img src={data.message} />
//     </>
//   )
// }

function App() {
  const [showMouse, setShowMouse] = useState(true);
  const [showLike, setShowLike] = useState(true);
  // const positions = useMousePositon();
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [showLike])
  const dogResult = data as IShowResult

  return (
    <div className="App">
       <p>
          <button onClick={() => {setShowLike(!showLike)}}>Refresh dog photo</button>
        </p>
        { loading ? <p>🐶 读取中</p>
        : <img src={dogResult && dogResult.message} />}
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
      {/* <WrappedDogShow /> */}
    </div>
  );
}

export default App;
