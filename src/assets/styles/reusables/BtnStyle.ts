/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IBtnStyle } from "../../ts-types/styleTypes";

export const BtnStyle = styled.button<IBtnStyle>`
  background: ${({ bg }) => bg ?? "transparent"};
  border: 0.125rem solid ${({ theme }) => theme.color.sec1};
  font-size: 0.675rem;
  font-weight: 700;
  padding: 0.5rem;

  @media (min-width: 576px) {
    padding: 0.5rem 1rem;
  }

  @media (min-width: 786px) {
    font-size: 0.875rem;
  }
`;
