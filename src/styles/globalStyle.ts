import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    height: 100%;
    body {
      height: 100%;
      #root {
        height: 100%;
      }
      .centered {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  ul,
  ol {
    list-style: none;
  }
  
  div:focus,
  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
  
  h1 {
    font-size: ${({ theme }) => theme.textSizes.xl};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.textSizes.l};
  }
  h3 {
    font-size: ${({ theme }) => theme.textSizes.l};
    line-height: 22px;
  }
  
  p, span, div, input, a, button {
    font-size: ${({ theme }) => theme.textSizes.m};
  }
}

`;

export default GlobalStyle;
