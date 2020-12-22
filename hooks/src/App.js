import React, {useState} from 'react';

const App = () => {
  // 1. useState
  const [item, setItem] = useState(1);
  const increamentItem = () => setItem( item + 1);
  const decrementItem = () => setItem( item - 1);

  return (
    <div>
      {/* 1. useState */}
      <h2>{item}</h2>
      <button onClick={increamentItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
};

export default App;