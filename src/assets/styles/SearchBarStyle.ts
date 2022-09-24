/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const SearchBarStyle = styled.form<IStyle>`
  padding: 0 0.9375rem;
  margin: 2rem 0;
  position: relative;

  input {
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 5px;
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.05);
    padding: 1rem 2.75rem;
    width: 100%;
  }

  input:focus {
    outline: 1px solid ${({ theme }) => theme.color.sec2};
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    left: 2rem;
    margin: 0;
    outline: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
  }
`;
