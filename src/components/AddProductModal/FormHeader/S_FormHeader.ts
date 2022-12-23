/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IFormHeaderStyle } from "../../../ts-types/styleTypes";

export const S_formHeader = styled.section<IFormHeaderStyle>`
  align-items: flex-start;
  border-bottom: 1px solid
    ${({ border, theme }) => (border ? theme.color.border2 : "transparent")};
  display: flex;
  padding: 2.3125rem 0;

  > svg {
    height: auto;
    margin-top: 0.25rem;
    min-width: 1.875rem;
    width: 1.875rem;
  }

  > div {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 0.5rem;

    h2 {
      font-size: 1.1rem;
    }

    button {
      align-items: center;
      color: ${({ theme }) => theme.color.sec1};
      display: flex;
      font-size: 0.875rem;
      font-weight: 600;

      svg {
        height: auto;
        margin-right: 0.6rem;
        width: 1.06rem;
      }

      span.placeholder {
        color: ${({ theme }) => theme.color.gray_dark};
      }

      span.option {
        color: ${({ theme }) => theme.color.pry};
      }
    }

    article,
    section {
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      column-gap: 1.81rem;
      margin-top: 1rem;

      > div {
        flex-grow: 1;
        flex-basis: 100%;
      }
    }

    h6:last-child {
      color: ${({ theme }) => theme.color.border};
      font-size: 0.75rem;
      font-weight: 400;
      margin: 0.2rem 0;
    }
  }

  @media (min-width: 576px) {
    > svg {
      min-width: 1.875rem;
      width: 1.875rem;
    }
    > div {
      h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 2.3125rem 0 2.3125 0.5rem;

    > div {
      margin-left: 0.75rem;

      article,
      section {
        > div {
          flex-basis: 45%;
        }
      }
    }
  }

  @media (min-width: 992px) {
    > div {
      margin-left: 1.3819rem;

      article,
      section {
        > div {
          flex-basis: 30%;
        }
      }
    }
  }
`;
