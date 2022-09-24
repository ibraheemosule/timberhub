import { createGlobalStyle } from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

const GlobalStyle = createGlobalStyle<IStyle>`

*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: 'Mukta Mahee', sans-serif;
}
`;

export default GlobalStyle;
