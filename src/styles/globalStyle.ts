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
      background: ${({ theme }) => theme.colors.gradient} fixed;
      overscroll-behavior: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${({ theme }) => theme.colors.primary.contrastText};
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

  a {
    color: ${({ theme }) => theme.colors.primary.contrastText};
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

.navbar {
  background-color: ${({ theme }) => theme.colors.primary.dark};
}

.links {
  display: flex;
  align-items: center;
}

.link {
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  // font-size: 2rem;
  text-transform: uppercase;
  a {
    color: #e4e4e4;
  }
}

.active-link {
  background-color: ${({ theme }) => theme.colors.primary.light};
}

`;

export default GlobalStyle;
