/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const CreateProductStyle = styled.section<IStyle>`
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  > div {
    background: #fff;
    height: 100%;
    margin: 0 0 0 auto;
    max-width: 972px;
    padding: 0 0.9375rem;
    width: 90%;
  }

  h1 {
    border-bottom: 1px solid ${({ theme }) => theme.color.border2};
    padding: 0.9375rem 0;
  }

  @media (min-width: 576px) {
    > div {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    > div {
      width: 75%;
    }
  }

  @media (min-width: 900px) {
    > div {
      width: 67.5%;
    }
  }

  @media (min-width: 1024px) {
    > div {
    }
  }
`;
