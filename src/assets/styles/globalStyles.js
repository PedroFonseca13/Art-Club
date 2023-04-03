import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #e5e5e5;
    --button: #433633;
    --textWithe: #f1f1f1;
    --mars: #E85937;
    --mars-light: #FF8C70;
    --mars-dark: #CF3F1D;

    --yellow-sun: #F5D15F;
    --jupiter: #E00E34;
    --earth: #0fdd86;
    --saturn: #554ad7;
    --uranus: #24FFE9;

    --space-light: #3d68b2;
    --space-dark: #040327;
    --space: #0B1E8A;

    --gray-01: #0D0E13;
    --gray-02: #2C2D3A;
    --gray-03: #60616F;
    --gray-04: #898A93;
    --gray-05: #D5D5DB;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    @media(media-width: 1440px) {
      /* font-size: 93.75%; */
    }
    @media(max-width: 375px) {
      /* font-size: 87.5%; */
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);

  }
  body,input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
  ul {
  padding: 0;
  }
  li {
    list-style: none;
  }
  footer {
    background-color: #2C2D3A;
    color: #f1f1f1;
    margin-bottom: 0;
    display: flex;
  }
  .margin_bottom { margin-bottom: 20px; }
  .padding_top { padding-top: 20px; }
`
