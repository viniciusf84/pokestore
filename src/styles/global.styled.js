import { createGlobalStyle } from 'styled-components';
import { colors, devices } from './variables';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
  }

  #root {
    min-height: 100vh;

    > section {
      min-height: calc(100vh - 100px);
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Hind Madurai', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.background_clear};
    color: ${colors.text_1};
  }

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }  

  .icon-wrapper {
    margin-bottom: 0;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 16px;

    @media ${devices.tablet} {
      padding: 0 32px;
    }
  }
  
`;
