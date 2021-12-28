import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('add effect', position.x)
    const updateMouse = (e: MouseEvent) => {
      setPosition({...position, x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse);
    return () => {
      console.log('remove effect', position.x)
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  console.log('first render', position.x)
  return (
    <p>X: {position.x}, Y: {position.y}</p>
  )
}

export default MouseTracker;