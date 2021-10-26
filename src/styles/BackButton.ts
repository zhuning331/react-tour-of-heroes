import styled from 'styled-components';

const BackButton = styled.button`
    margin-top: 20px;
    background-color: #eee;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
        background-color: #cfd8dc;
        color: white;
    }
    &:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
    }
`

export default BackButton;