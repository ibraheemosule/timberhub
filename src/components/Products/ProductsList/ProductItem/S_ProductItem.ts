/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../../ts-types/styleTypes";

export const S_ProductItem = styled.section<IStyle>`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.border2};
  display: flex;
  flex-wrap: wrap;
  padding: 1.375rem 0;

  > div {
    align-items: center;
    display: flex;
    width: 100%;
    font-size: 0.8125rem;

    svg {
      align-self: flex-start;
      margin-top: 0.25rem;
      width: 2rem;
    }

    .wrapper {
      align-items: center;
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      margin-left: 0.5rem;

      div:nth-child(1) {
        padding-right: 2rem;
        text-transform: capitalize;

        p:nth-child(2) {
          margin-top: 0.3125rem;

          mark {
            color: ${({ theme }) => theme.color.sec1};
            background: transparent;
            margin-right: 5px;
          }
        }
      }

      div:nth-child(2) {
        margin-top: 0.5rem;

        p {
          background: ${({ theme }) => theme.color.gray_light};
          border-radius: 5px;
          display: inline-block;
          padding: 0.25rem 0.5625rem;
          margin: 0.5rem 0.3125rem 0 0;
        }

        p:last-of-type {
          margin-right: 0;
        }

        span {
          margin-right: 5px;
        }
      }

      span {
        color: ${({ theme }) => theme.color.gray};
      }
    }
  }

  @media (min-width: 500px) {
    > div {
      svg {
        width: initial;
      }

      .wrapper {
        div:nth-child(1) {
          flex-basis: 43%;
          padding-right: 0;
        }

        div:nth-child(2) {
          p {
            margin: 0.5rem 0.8125rem 0 0;
          }
        }
      }
    }
  }

  @media (min-width: 576px) {
    > div {
      .wrapper {
        margin-left: 0.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0.9375rem 0 0.9375rem 0.5rem;

    > div {
      .wrapper {
        margin-left: 0.75rem;

        div:nth-child(1) {
          flex-basis: 42%;
        }

        div:nth-child(2) {
          margin-top: 0;
        }
      }
    }
  }

  @media (min-width: 992px) {
    > div {
      .wrapper {
        margin-left: 1.3819rem;
      }
    }
  }

  @media (min-width: 1440px) {
    > div {
      .wrapper {
        div:nth-child(1) {
          flex-basis: 43%;
        }
      }
    }
  }
`;