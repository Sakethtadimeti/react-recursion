import React from 'react';
import { SIDE } from './App';
const Box = ({
  n,
  style = {
    width: n * SIDE,
    height: n * SIDE,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}) => {
  if (n === 0) {
    return null;
  } else {
    return (
      <div
        style={style}
        className={n % 2 === 0 ? `box-style` : `box-style-odd`}
      >
        <Box n={n - 1} />
      </div>
    );
  }
};

export default React.memo(Box);
