/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const SelectFieldStyle = styled.section<IStyle>`
  margin-top: 1rem;

  h6 {
    font-size: 0.9375rem;
    font-weight: 700;
  }

  fieldset {
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 5px;
    margin: 0.5rem 0 0;
    position: relative;
    width: 100%;

    > button {
      display: block;
      font-size: 0.875rem;
      font-weight: 400;
      height: 100%;

      padding: 1rem 0;
      width: 100%;
    }

    .wrapper {
      color: ${({ theme }) => theme.color.gray_dark};
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.875rem;

      svg {
        width: 0.7212rem;
        height: auto;
        transition: all 0.2s ease-in;
      }
    }

    .dropdown {
      background: white;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.color.border};
      color: ${({ theme }) => theme.color.gray_dark};
      display: none;
      left: 0;
      list-style-type: none;
      position: absolute;
      top: 120%;
      width: 100%;

      li {
        background: transparent;
        border: 0;
        border-bottom: 1px solid ${({ theme }) => theme.color.border};
        transition: all 0.2s ease-out;

        a {
          display: block;
          padding: 0.875rem;
          width: 100%;

          &:hover {
            background-color: ${({ theme }) => theme.color.gray_light};
          }
        }
      }

      li:last-of-type {
        border: 0;
      }
    }
    > button:focus {
      .wrapper {
        svg {
          transform: rotate(180deg);
          transform-origin: 50%;
        }
      }
      .dropdown {
        display: block;
      }
    }
  }
`;
