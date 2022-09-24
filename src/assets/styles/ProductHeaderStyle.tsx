/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const ProductHeaderStyle = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1.7rem 0 0;

    h1 {
      font-size: 1.2rem;
    }

    button {
      background: transparent;
      border: 0.125rem solid ${({ theme }) => theme.color.sec1};
      font-size: 0.675rem;
      font-weight: 700;
      outline: none;
      padding: 0.5rem;
    }
  }

  @media (min-width: 576px) {
    & > div {
      h1 {
        font-size: 2.0625rem;
      }

      button {
        padding: 0.5rem 1rem;
      }
    }
  }

  @media (min-width: 786px) {
    & > div {
      button {
        font-size: 0.875rem;
      }
    }
  }
`;
