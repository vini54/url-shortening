import styled from "styled-components";

import backgound1 from "assets/bg-boost-desktop.svg";
import backgound2 from "assets/bg-boost-mobile.svg";

export const Container = styled.section`
  width: 100%;
  background: url(${backgound1}) no-repeat,
    linear-gradient(
      ${({ theme }) => theme.DarkViolet},
      ${({ theme }) => theme.DarkViolet}
    );
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 32px 16px;

  h1 {
    font-size: 2.4em;
    color: #f9f9f9;
    text-align: center;
  }

  button {
    background-color: ${({ theme }) => theme.Cyan};
    padding: 8px 32px;
    border-radius: 40px;
    font-size: 1em;
    font-weight: 600;
    color: #f9f9f9;
    transition: 0.4s ease;
    &:hover {
      filter: brightness(110%);
    }
  }

  @media screen and (max-width: 767.9px) {
    gap: 16px;
    h1 {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 424.9px) {
    background: url(${backgound2}) no-repeat,
      linear-gradient(
        ${({ theme }) => theme.DarkViolet},
        ${({ theme }) => theme.DarkViolet}
      );
    background-size: cover;
    background-position: right center;
  }
`;
