/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_DeleteProduct = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.7rem auto 0;

    .confirm-delete {
        flex-basis: 100%;

        button:nth-of-type(2) {
            margin-left: 2rem;
        }
    }

    }
  }

  @media (min-width: 768px) {
    & > div {
      justify-content: start;
    }
  }
`;
