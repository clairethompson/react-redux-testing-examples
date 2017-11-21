import React from 'react';

const App  = ({count, incrementCounter}) => (
  <div className="App">
    <button onClick={incrementCounter} >Click me! </button>
    <p>This button has been clicked {count} times!</p>
  </div>
);

export default App;
