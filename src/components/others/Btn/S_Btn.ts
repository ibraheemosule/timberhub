/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IBtnStyle } from "../../../ts-types/styleTypes";

export const S_Btn = styled.button<IBtnStyle>`
  background: ${({ bg }) => bg};
  border: 0.125rem solid ${({ theme, bg }) => bg ?? theme.color.sec1};
  color: #000;
  font-size: 0.675rem;
  font-weight: 700;
  padding: 0.5rem;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.7;
    transform: translate(0, -1px);
  }

  @media (min-width: 576px) {
    padding: 0.5rem 1rem;
  }

  @media (min-width: 786px) {
    font-size: 0.875rem;
  }
`;
