import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_title = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1.7rem auto 0;
  }
`;
