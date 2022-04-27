import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 128px calc(8 * 0.6vw);
  gap: 16px;
  background-color: #fff;

  @media screen and (max-width: 669.9px) {
    flex-direction: column-reverse;
  }

  .left {
    width: 46%;
    padding: 0 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-size: 3.4em;
      line-height: 1.1em;
      color: ${({ theme }) => theme.VeryDarkBlue};
    }
    p {
      width: 80%;
      color: ${({ theme }) => theme.GrayishViolet};
      font-weight: 500;
    }
    button {
      margin-top: 16px;
      background-color: ${({ theme }) => theme.Cyan};
      padding: 8px 32px;
      border-radius: 20px;
      font-size: 1em;
      font-weight: 500;
      color: #f9f9f9;
      transition: 0.4s ease-in-out;
      &:hover {
        opacity: 0.6;
      }
    }
    @media screen and (max-width: 1023.9px) {
      width: 55%;
      h1 {
        font-size: 3em;
      }
    }
    @media screen and (max-width: 767.9px) {
      width: 100%;
      h1 {
        font-size: 2.4em;
      }
      p {
        font-size: 0.9em;
      }
    }
    @media screen and (max-width: 669.9px) {
      text-align: center;
      align-items: center;
    }
  }

  .right {
    width: 46%;
    overflow-x: hidden;
    img {
      max-width: none;
      width: 120%;
    }
    @media screen and (max-width: 1023.9px) {
      width: 40%;
    }
    @media screen and (max-width: 767.9px) {
      max-width: 320px;
      width: 100%;
      align-self: flex-end;
      img {
        width: 140%;
      }
    }
  }
`;
