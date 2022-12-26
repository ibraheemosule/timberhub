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
      gap: 1.5rem;
      justify-content: center;
      margin: 0;
      width: 100%;

      section {
        width: 150px;
      }
    }

    h3 {
      margin: 2rem 0 0;
      text-align: center;
      flex-basis: 100%;
    }

    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
      margin: 2rem 0 0;
    }
  }

  @media (min-width: 786px) {
    & > div {
      .filter-wrapper {
        justify-content: flex-start;
      }

      .cards-wrapper {
        justify-content: flex-start;
      }

      h3 {
        text-align: left;
      }
    }
  }
`;
