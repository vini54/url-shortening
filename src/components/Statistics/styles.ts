import styled from "styled-components";

const mainPadding = "calc(8 * 0.6vw)";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 0 ${mainPadding};
  padding-bottom: 64px;
  .head {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    h1 {
      font-size: 2.4em;
      color: ${({ theme }) => theme.VeryDarkBlue};
    }
    p {
      width: 70%;
      color: ${({ theme }) => theme.GrayishViolet};
    }
  }

  .cardsContainer {
    display: flex;
    justify-content: space-between;
    z-index: 1;
    position: relative;

    @media screen and (max-width: 767.9px) {
      flex-direction: column;
      gap: 64px;
    }

    .line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: ${({ theme }) => theme.Cyan};
      z-index: 2;

      @media screen and (max-width: 767.9px) {
        width: 8px;
        height: 100%;
        top: 0;
        left: 68px;
      }

      @media screen and (max-width: 424.9px) {
        left: calc(50% - 4px);
      }
    }

    .card {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 64px 32px 48px 32px;
      background-color: #fff;
      border-radius: 8px;
      position: relative;
      z-index: 3;

      @media screen and (max-width: 767.9px) {
        width: 100%;
        max-width: 560px;
      }

      .img {
        position: absolute;
        left: 32px;
        top: -40px;
        width: 80px;
        height: 80px;
        background: ${({ theme }) => theme.DarkViolet};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 424.9px) {
          left: calc(50% - 40px);
        }
      }
      h3 {
        color: ${({ theme }) => theme.VeryDarkBlue};
      }
      p {
        color: ${({ theme }) => theme.GrayishViolet};
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    .card:nth-child(3) {
      margin-top: 48px;
      @media screen and (max-width: 767.9px) {
        margin: 0;
      }
    }
    .card:nth-child(4) {
      margin-top: 96px;
      @media screen and (max-width: 767.9px) {
        margin: 0;
      }
    }
  }
`;
