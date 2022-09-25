/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const ProductHeaderStyle = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1.7rem auto 0;
  }
`;
