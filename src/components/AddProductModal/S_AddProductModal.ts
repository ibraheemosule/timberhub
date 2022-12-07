/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { ICreateProductStyle } from "../../ts-types/styleTypes";
export const S_AddProductModal = styled.section<ICreateProductStyle>`
  ${({ modal }) =>
    modal
      ? " background: rgba(0, 0, 0, 0.3)"
      : "animation: slide-out 0.5s linear 1 normal forwards"};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  > div {
    background: #fff;
    display: none;
    height: 100%;
    margin: 0 0 0 auto;
    max-width: 972px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 0.9375rem;
    position: relative;
    width: 90%;
    animation: ${({ modal }) => (modal ? "slide-in" : "slide-out")} 0.5s linear
      1 normal forwards;

    h1 {
      border-bottom: 1px solid ${({ theme }) => theme.color.border2};
      padding: 0.9375rem 0;
    }

    footer {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 2rem 0;
      position: relative;
      width: 100%;

      h5 {
        color: ${({ theme }) => theme.color.gray_dark};
        left: 0;
        position: absolute;
        text-align: center;
        text-transform: uppercase;
        top: -2rem;
        width: 100%;
      }

      button:first-of-type {
        color: #000;
        font-size: 0.875rem;
        font-weight: 700;
        margin-top: -0.875rem;
        padding: 0.875rem 0.875rem 0;
      }
    }
  }

  .show {
    display: block;
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

  @keyframes slide-in {
    0% {
      left: 100%;
    }
    25% {
      left: 75%;
    }
    40% {
      left: 50%;
    }
    65% {
      left: 25%;
    }
    90% {
      left: 0%;
    }
    100% {
      left: 0%;
    }
  }

  @keyframes slide-out {
    0% {
      left: 0%;
    }
    25% {
      left: 20%;
    }
    40% {
      left: 40%;
    }
    65% {
      left: 60%;
    }
    90% {
      left: 80%;
    }
    100% {
      left: 100%;
    }
  }
`;
