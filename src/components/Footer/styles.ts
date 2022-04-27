import styled from "styled-components";

const mainPadding = "calc(8 * 0.6vw)";

export const Container = styled.footer`
  width: 100%;
  padding: 32px ${mainPadding};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  background-color: ${({ theme }) => theme.VeryDarkViolet};

  .logo {
    object-fit: contain;
    object-position: top;
    filter: invert(1);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
      cursor: pointer;
      color: ${({ theme }) => theme.Gray};
      font-weight: 500;
      transition: 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.Cyan};
      }
    }
    li.head {
      cursor: default;
      color: #f9f9f9;
      font-weight: 600;
    }
  }

  .socials {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: 767.9px) {
    flex-wrap: wrap;

    .logo {
      width: 100%;
      height: 48px;
      object-fit: scale-down;
      object-position: top left;
    }
    .socials {
      width: 100%;
    }

    ul {
      width: 30%;
    }
  }

  @media screen and (max-width: 529.9px) {
    justify-content: center;
    ul:not(.socials) {
      min-width: 160px;
      width: 46%;
      text-align: center;
    }
  }
`;
