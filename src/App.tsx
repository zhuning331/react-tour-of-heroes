import { useState } from 'react';
import { Title } from './styles/Title';

function App() {
  const [title] = useState('Tour of Heroes');

  return (
    <Title>{title}</Title>
  );
}

export default App;
