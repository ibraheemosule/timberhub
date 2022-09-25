/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const HeadingStyle = styled.section<IStyle>`
  border-bottom: 1px solid ${({ theme }) => theme.color.border2};
  padding: 0.9375rem;
`;
