/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../../ts-types/styleTypes";

export const S_deleteProduct = styled.section<IStyle>`
margin: 4rem 0;
position: relative;
padding: 0 0.9375rem;

  & > div {
    display: flex;
    flex-wrap: wrap;
    margin: 1.7rem auto 0;

    .confirm-delete {
        button:nth-of-type(2) {
            margin-left: 2rem;
        }
    }

    .api-call-info {
        position: absolute;
        top: -150%;
        left: 50%;
        transform: translate(-50%, 0%);
    }

    }
  }

  @media (min-width: 576px) {
    & > div {
      justify-content: start;

      .api-call-info {
        top: 0;
      }
    }
  }
`;
