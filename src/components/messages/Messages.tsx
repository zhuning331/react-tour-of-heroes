import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubTitle from '../../styles/SubTitle';
import ClearButton from '../../styles/ClearButton';
import { storeTypes } from '../../store/configureStore';
import { clearMessage } from '../../actions/messageAction';

const Messages = () => {
    const messages = useSelector((state: storeTypes) => state.messageReducer.messages);
    const dispatch = useDispatch();

    return (
        <Fragment>
            {messages && 
            <Fragment>
                <SubTitle color="#A80000">Messages</SubTitle>
                <ClearButton onClick={() => dispatch(clearMessage())}>Clear messages</ClearButton>
                {messages.map((message, index) => <div key={index}>{message}</div>)}
            </Fragment>}
        </Fragment>
    )
}

export default Messages;