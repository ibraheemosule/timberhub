/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../../ts-types/styleTypes";

export const S_DimensionCard = styled.div<IStyle>`
  margin: 0 0 1rem 1rem;
  min-width: 90%;
  padding: 1rem 0.75rem 1.25rem;
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
    display: flex;
    justify-content: flex-end;
    position: relative;

    span {
      position: absolute;
      left: 0;
      font-size: 0.7rem;
    }

    button {
      all: unset;
      cursor: pointer;
      height: 15px;
      width: 15px;
      color: #ab767649;
      padding: 5px;

      &:hover {
        color: ${({ theme }) => theme.color.gray};
      }
    }
  }

  @media (min-width: 370px) {
    min-width: 150px;
  }
`;
