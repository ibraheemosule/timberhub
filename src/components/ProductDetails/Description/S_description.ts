/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_description = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 786px;
    margin: 1.7rem 0;

    .details {
      margin: 0 1rem 1rem;

      h4 {
        color: ${({ theme }) => theme.color.gray_dark};
        font-size: 0.75rem;
        text-transform: uppercase;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
