import './App.css';
import { useState } from 'react';
import Box from './Box';
const N = 15;
export const SIDE = 40;
const App = () => {
  const [origin, setOrigin] = useState({ left: 0, top: 0 });
  return (
    <div
      className="App"
      onMouseMove={(event) => {
        setOrigin({ left: event.clientX, top: event.clientY });
      }}
    >
      <h1>This recurs in react!!</h1>
      <Box
        n={N}
        className="box-style"
        style={{
          width: N * SIDE,
          height: N * SIDE,
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          ...origin,
        }}
      />
    </div>
  );
};

export default App;
