import styled from "styled-components";
import { IStyle } from "../../../../ts-types/styleTypes";

export const S_topHeader = styled.nav<IStyle>`
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.13);
  padding: 0.625rem 0 0.6075rem 1.1875rem;
  position: relative;

  svg {
    width: 8rem;
  }

  @media (min-width: 576px) {
    svg {
      width: 8.9375rem;
    }
  }

  @media (min-width: 768px) {
    svg {
      width: 9.9375rem;
    }
  }
`;
