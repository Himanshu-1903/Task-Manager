import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const header = (
    <header>
      <h1>Welcome to My App</h1>
      <h2>I am learning dev and starting with React</h2>
      <h3>On a journey to learn full stack development</h3>
    </header>
  );

  const counter = (
    <div>
      <h2>Basic Counter Example</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );

  return (
    <div>
      {header}
      {counter}
    </div>
  );
}

export default App;