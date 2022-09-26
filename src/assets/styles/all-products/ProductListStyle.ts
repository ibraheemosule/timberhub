/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const ProductListStyle = styled.article<IStyle>`
  font-family: "Inter", sans-serif;
  margin: 2rem 0 0;
  padding: 0 0.9375rem;

  > div {
    display: flex;
    justify-content: space-between;

    h6 {
      color: ${({ theme }) => theme.color.gray};
      flex-basis: 45%;
      font-size: 0.75rem;
      font-weight: 400;

      small {
        font-size: 0.5rem;
      }
    }
  }

  h5 {
    margin-top: 4rem;
    text-align: center;
  }

  @media (min-width: 576px) {
    > div {
      justify-content: flex-start;
    }
  }
`;
