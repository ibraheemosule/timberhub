import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

interface IS_products extends IStyle {
  modal: boolean;
}

export const S_products = styled.div<IS_products>`
  overflow: ${({ modal }) => (modal ? "hidden" : "auto")};
  height: 100vh;
`;
