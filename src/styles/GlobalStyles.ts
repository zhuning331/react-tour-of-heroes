import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 2em;
    }
    body, input[type="text"], button {
        color: #333;
        font-family: Cambria, Georgia, serif;
    }
    * {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;