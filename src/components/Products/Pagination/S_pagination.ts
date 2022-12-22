import styled from "styled-components";

export const S_pagination = styled.section`

    margin: 2rem 0 4rem 0;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    color:  rgba(0, 0, 0, 0.868);

    button {
      margin-right: 10px;
      margin-left: 10px;
      border: none;
      outline: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.868);
      transition: all 0.2s ease-in;

      &:hover {
        color: rgba(128, 128, 128, 0.733);
      }

      &:disabled {
        color: rgba(128, 128, 128, 0.253);
        cursor: not-allowed;
      }
    }

    span {
      border: 2px solid rgba(0, 0, 0, 0.868);
      border-radius: 5px;
      padding: 0.2rem 0.6rem;
    }
  }
`;
