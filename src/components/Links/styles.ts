import styled from "styled-components";
import backgroud1 from "assets/bg-shorten-desktop.svg";
import backgroud2 from "assets/bg-shorten-mobile.svg";

const mainPadding = "calc(8 * 0.6vw)";

export const Container = styled.section`
  margin: -64px 0 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 ${mainPadding};

  .inputContainer {
    width: 100%;
    padding: 48px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    background: url(${backgroud1}) no-repeat,
      linear-gradient(
        ${({ theme }) => theme.DarkViolet},
        ${({ theme }) => theme.DarkViolet}
      );
    background-size: cover;
    background-position: right center;
    border-radius: 8px;
    position: relative;

    @media screen and (max-width: 767.9px) {
      background-position: center;
      flex-direction: column;
      align-items: center;
      padding: 32px;

      input {
        width: 100%;
      }
      button {
        padding: 8px;
      }
    }
    @media screen and (max-width: 424.9px) {
      background: url(${backgroud2}) no-repeat,
        linear-gradient(
          ${({ theme }) => theme.DarkViolet},
          ${({ theme }) => theme.DarkViolet}
        );
      background-position: right top;
      padding: 32px 16px;
    }

    input {
      flex: 1;
      padding: 8px 16px;
      border: none;
      outline: none;
      font-size: 1em;
      border-radius: 8px;
      transition: 0.4s linear;
    }
    button {
      width: 160px;
      background-color: ${({ theme }) => theme.Cyan};
      color: #f6f6f6;
      font-weight: 500;
      font-size: 1em;
      border-radius: 8px;
      transition: 0.4s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        filter: brightness(120%);
      }
    }

    &.warning {
      input {
        border: 2px solid ${({ theme }) => theme.Red};
      }
    }
  }

  ul {
    width: 100%;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    overflow-y: auto;

    .spinner {
      margin: 8px;
      color: ${({ theme }) => theme.Cyan};
    }

    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: #f0f1f6;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.Cyan};
      border-radius: 8px;
      border: 2px solid #f0f1f6;
    }

    li {
      width: 100%;
      padding: 16px;
      background-color: #fff;
      display: flex;
      align-items: center;
      border-radius: 8px;
      gap: 16px;
      .link {
        flex: 1;
        display: flex;
        justify-content: space-between;
        gap: 16px;
        overflow-x: hidden;
        p {
          max-width: 46%;
          overflow-x: hidden;
          font-weight: 500;
          color: ${({ theme }) => theme.VeryDarkBlue};
          display: flex;
          align-items: center;
        }
        a {
          max-width: 46%;
          overflow-x: hidden;
          font-weight: 600;
          color: ${({ theme }) => theme.Cyan};
          display: flex;
          align-items: center;
        }
      }
      button {
        flex-shrink: 0;
        width: 120px;
        padding: 8px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.Cyan};
        color: #f9f9f9;
        font-size: 1rem;
        transition: 0.4s ease;
        &:hover {
          opacity: 0.8;
        }
      }
      @media screen and (max-width: 767.9px) {
        flex-direction: column;
        .link {
          width: 100%;
          flex-wrap: wrap;
          gap: 8px;
          p,
          a {
            max-width: none;
            width: 100%;
          }
          a {
            border-top: 1px solid ${({ theme }) => theme.Gray};
            padding-top: 8px;
          }
        }
      }
    }
  }
`;
