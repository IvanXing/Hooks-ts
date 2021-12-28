import React, { useState, useEffect, useRef } from 'react';

const LikeRefButton: React.FC = () => {
  const [like, setLike] = useState(0);

  const didMountRef = useRef(false);
  const likeRef = useRef(0);
  const domRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log(domRef) // {current: input}
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  useEffect(() => {
    if (didMountRef.current) {
      console.log('update')
    } else {
      didMountRef.current = true
    }
  })
  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on ' + likeRef.current)
    }, 3000)
  }

  return <>
    <input type="text" ref={domRef} />
    <button onClick={() => { setLike(like + 1); likeRef.current++}}>{like}</button>
    <button onClick={handleAlertClick}>Alert</button>
  </>
}

export default LikeRefButton;
