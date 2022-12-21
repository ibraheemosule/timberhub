/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_Dimensions = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.7rem auto 0;

    .details {
      margin: 0 0 1rem 1rem;
      min-width: 150px;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      box-shadow: 0 0 11px -4px rgba(0, 0, 0, 0.34);
      -webkit-box-shadow: 0 0 11px -4px rgba(0, 0, 0, 0.34);
      -moz-box-shadow: 0px 0 11px -4px rgba(0, 0, 0, 0.34);

      h4 {
        font-size: 0.75rem;
        text-transform: uppercase;

        small {
          color: ${({ theme }) => theme.color.gray_dark};
          margin-right: 5px;
        }
      }

      div {
        text-align: right;

        button {
          all: unset;
          cursor: pointer;
          height: 15px;
          width: 15px;

          &:hover {
            color: ${({ theme }) => theme.color.gray};
          }
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
