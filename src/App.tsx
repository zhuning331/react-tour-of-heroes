import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './styles/Title';
import Heroes from './components/heroes/Heroes';
import Messages from './components/messages/Messages';
import { storeTypes } from './store/configureStore';
import { setTitle } from './actions/titleAction';

function App() {
  const title = useSelector((state: storeTypes) => state.titleReducer.title);
  const dispatch = useDispatch();
  setTimeout(() => dispatch(setTitle('React Tour of Hero')), 1000);

  return (
    <Fragment>
      <Title>{title}</Title>
      <Heroes />
      <Messages />
    </Fragment>
  );
}

export default App;
