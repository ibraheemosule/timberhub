import { createGlobalStyle } from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

const GlobalStyle = createGlobalStyle<IStyle>`

*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
}

body {
  font-size: 16px;
  font-family: 'Mukta Mahee', sans-serif;
  background: #fff;
}

button {
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

h1 {
  font-size: 1.2rem;
}

.animate {
  animation: slide .5s linear 1 normal forwards;
}

.animate-reverse {
  animation: slide .5s linear 1 reverse forwards;
}

@keyframes slide {
  0%   { left:1000%}
    25%  {left:100%; }
    50%  { left:50%; }
    75%  {left:25%; }
    100% { left:0%; }
}

@media (min-width: 576px) {
  h1 {
    font-size: 2.0625rem;
  }
}
`;

export default GlobalStyle;
