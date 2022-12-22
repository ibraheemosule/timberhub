/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

interface IS_SuccessMessageModal extends IStyle {
  popup: boolean;
  success?: boolean;
}

export const S_SuccessMessageModal = styled.div<IS_SuccessMessageModal>`
  position: absolute;
  right: 0%;
  top: ${({ popup }) => (popup ? "0%" : "-100%")};
  display: inline-block;
  padding: 1rem 3rem;
  background: ${({ theme, success }) =>
    success ? theme.color.sec1 : "#ab767645"};
  border-radius: 0 0 0 5px;
  color: ${({ theme }) => theme.color.pry};
  font-weight: 600;
  transition: top 1s ease;
  z-index: -1;
`;
