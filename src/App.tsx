import { useState } from 'react';
import './App.css';

function App() {
  const [title] = useState('Tour of Heroes');

  return (
    <h1>{title}</h1>
  );
}

export default App;
