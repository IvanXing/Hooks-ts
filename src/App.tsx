import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton'
import Hello from './components/Hello'

interface IThemeProps {
  [key: string]: { color: string; background: string; }
}
const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#222',
  }
}

export const ThemeContext = React.createContext(themes.light)

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <LikeButton />
        <Hello />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
