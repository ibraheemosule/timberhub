import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_Container = styled.div<IStyle>`
  max-width: 1440px;
  margin: auto;

  @media (min-width: 768px) {
    padding: 0 1.1875rem;
  }
`;
