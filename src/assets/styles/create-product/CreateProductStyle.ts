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
    overflow: scroll;
    padding: 0 0.9375rem;
    position: relative;
    width: 90%;

    h1 {
      border-bottom: 1px solid ${({ theme }) => theme.color.border2};
      padding: 0.9375rem 0;
    }

    footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 14.9375rem 0 2rem 0;
      width: 100%;

      button:nth-child(1) {
        margin: 0.875rem 0.875rem 0;
        font-size: 0.875rem;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 576px) {
    > div {
      padding: 0 1rem;
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    > div {
      padding: 0 1.8125rem 0 1.375rem;
      width: 75%;
    }
  }

  @media (min-width: 900px) {
    > div {
      width: 67.5%;
    }
  }
`;
