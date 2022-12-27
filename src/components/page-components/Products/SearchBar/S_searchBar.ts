/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../../ts-types/styleTypes";

export const S_searchBar = styled.form<IStyle>`
  margin: 2rem 0 0;
  padding: 0 0.9375rem;
  position: relative;

  input {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 5px;
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.05);
    padding: 1rem 2.75rem;
    width: 100%;
  }

  input:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.color.sec2};
  }

  button {
    left: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
  }
`;
