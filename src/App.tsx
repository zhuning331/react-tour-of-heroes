import { useState, Fragment } from 'react';
import Title from './styles/Title';
import Heroes from './components/heroes/Heroes';

function App() {
  const [title] = useState('Tour of Heroes');

  return (
    <Fragment>
      <Title>{title}</Title>
      <Heroes />
    </Fragment>
  );
}

export default App;
