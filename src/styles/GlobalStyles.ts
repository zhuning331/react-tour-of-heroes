import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @media (min-width: 600px) {
        body {
            margin: 2em;
        }
    }
    body {
        padding: 0.5rem;
        max-width: 1000px;
        margin: auto;
    }
    * {
        font-family: Arial, Helvetica, sans-serif;
    }
    nav a {
        padding: 1rem;
        text-decoration: none;
        margin-top: 10px;
        margin-right: 10px;
        display: inline-block;
        background-color: #e8e8e8;
        color: #3d3d3d;
        border-radius: 4px;
    }
    nav a:hover {
        color: white;
        background-color: #42545C;
    }
    nav a.active {
        background-color: black;
    }
`;

export default GlobalStyle;