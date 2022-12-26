/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const S_dimensions = styled.section<IStyle>`
  padding: 0 0.9375rem;

  & > div {
    display: flex;
    flex-wrap: wrap;
    margin: 1.7rem auto 0;

    .filter-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 0 2rem 0;
      width: 100%;

      section {
        width: 150px;
        margin: 1rem 1rem 0 0;
      }
    }

    h3 {
      text-align: center;
      flex-basis: 100%;
    }
  }

  @media (min-width: 576px) {
    & > div {
      .filter-wrapper {
        justify-content: flex-start;
      }

      h3 {
        text-align: left;
      }
    }
  }
`;
