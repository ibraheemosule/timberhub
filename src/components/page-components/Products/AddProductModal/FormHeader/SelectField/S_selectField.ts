/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { ISelectFieldStyle } from "../../../../../../ts-types/styleTypes";

export const S_selectField = styled.section<ISelectFieldStyle>`
  position: relative;

  h6 {
    font-size: 0.9375rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  .input-error {
    display: block;
    color: ${({ theme }) => theme.color.border};
    position: absolute;
    inset: 100% 0 0 0;
    text-align: center;
  }

  fieldset {
    border: 1px solid
      ${({ theme, inputError }) => (inputError ? "red" : theme.color.border)};
    border-radius: 5px;
    margin: 0.5rem 0 0;
    position: relative;
    width: 100%;

    > button {
      display: block;
      font-size: 0.875rem;
      font-weight: 400;
      height: 100%;
      text-align: right;
      padding: 1rem 0;
      width: 100%;

      input {
        all: unset;
        padding: 0 1rem;
        position: absolute;
        inset: 0;
        text-align: left;
        z-index: 1;

        &:focus,
        &:hover {
          border: 0;
          outline: 0;
        }
      }
    }

    svg {
      width: 0.7212rem;
      height: auto;
      transition: all 0.2s ease-in;
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
      max-height: 135px;
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      z-index: 2;

      &::-webkit-scrollbar {
        display: none;
      }

      li {
        border: 0;
        border-bottom: 1px solid ${({ theme }) => theme.color.border};
        transition: all 0.2s ease-out;
        text-align: center;

        a {
          background: #fff;
          display: block;
          padding: 0.875rem;

          &:hover {
            background-color: ${({ theme }) => theme.color.gray_light};
          }
        }
      }

      li:last-of-type {
        border: 0;
      }
    }
    ${({ dropdown }) =>
      // line 78 to 103 is responsible for the select list dropdown functionality
      dropdown
        ? `button {

        svg {
          transform: rotate(180deg);
          transform-origin: 50%;
        }

      .dropdown {
        display: block;
      }
    }`
        : `button {

        svg {
          transform: rotate(0deg);
          transform-origin: 50%;
        }

      .dropdown {
        display: none;
      }
    }`}
  }

  input {
    outline: 0;
    border: 1px solid
      ${({ theme, inputError }) => (inputError ? "red" : theme.color.border)};
    border-radius: 5px;
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.05);
    margin: 0.5rem 0 0;
    padding: 1rem;
    width: 100%;
  }

  input:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.color.sec2};
  }
`;
