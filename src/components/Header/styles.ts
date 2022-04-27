import styled from "styled-components";

const mainPadding = "calc(8 * 0.6vw)";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px ${mainPadding};
  position: relative;
  background-color: #fff;
  .left {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  nav {
    display: flex;
    gap: 12px;
    p {
      color: ${({ theme }) => theme.GrayishViolet};
      font-weight: 600;
      font-size: 0.9em;
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.DarkViolet};
      }
    }
    @media screen and (max-width: 767.9px) {
      display: none;
    }
  }

  .right {
    display: flex;
    gap: 16px;
    @media screen and (max-width: 767.9px) {
      display: none;
    }
  }
  .login {
    background: none;
    color: ${({ theme }) => theme.GrayishViolet};
    font-weight: 600;
    transition: 0.4s ease;
    &:hover {
      color: ${({ theme }) => theme.DarkViolet};
    }
  }
  .sign {
    background-color: ${({ theme }) => theme.Cyan};
    color: #f9f9f9;
    padding: 8px 16px;
    font-weight: 600;
    border-radius: 20px;
    transition: 0.4s ease;
    &:hover {
      opacity: 0.6;
    }
  }

  .menuBtn {
    display: none;
    justify-content: center;
    align-items: center;
    button {
      background: none;
    }
    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.GrayishViolet};
      transition: 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.DarkViolet};
      }
    }
    @media screen and (max-width: 767.9px) {
      display: flex;
    }
  }

  .Menu {
    position: absolute;
    top: 100%;
    right: ${mainPadding};
    padding: 16px;
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: ${({ theme }) => theme.DarkViolet};
    border-radius: 8px;
    animation: openMenu 0.6s ease;
    transform-origin: top right;
    .nav {
      display: flex;
      flex-direction: column;
      gap: 8px;
      text-align: center;
      color: #f9f9f9;
      font-weight: 500;
      p {
        cursor: pointer;
      }
    }
    hr {
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.Gray};
      border: none;
    }
    .btns {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      button {
        font-size: 1em;
      }
      .login {
        color: #f9f9f9;
      }
      .sign {
        width: 100%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 400px) {
      width: calc(100% - ${mainPadding} * 2);
    }
  }

  @keyframes openMenu {
    from {
      transform: scaleY(0.4);
      opacity: 0;
    }
    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;
