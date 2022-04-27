import { Container } from "./styles";
import Logo from "assets/logo.svg";

import facebook from "assets/icon-facebook.svg";
import twitter from "assets/icon-twitter.svg";
import pinterest from "assets/icon-pinterest.svg";
import instagram from "assets/icon-instagram.svg";

export const Footer = () => {
  return (
    <Container>
      <img src={Logo} alt="brand" className="logo" />

      <ul>
        <li className="head">Features</li>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>

      <ul>
        <li className="head">Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>

      <ul>
        <li className="head">Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>

      <ul className="socials">
        <li>
          <img src={facebook} alt="icon" />
        </li>
        <li>
          <img src={twitter} alt="icon" />
        </li>
        <li>
          <img src={pinterest} alt="icon" />
        </li>
        <li>
          <img src={instagram} alt="icon" />
        </li>
      </ul>
    </Container>
  );
};
