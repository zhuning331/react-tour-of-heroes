import styled from 'styled-components';

const DeleteButton = styled.button`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    left: 198px;
    top: 5px;
    background-color: white;
    color:  #525252;
    font-size: 1.1rem;
    padding: 1px 10px 3px 10px;
    &:hover {
        background-color: #525252;
        color: white;
    }
`

export default DeleteButton;