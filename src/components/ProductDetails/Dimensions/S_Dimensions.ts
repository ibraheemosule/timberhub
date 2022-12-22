/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_Dimensions = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 1.7rem auto 0;
  }
`;
