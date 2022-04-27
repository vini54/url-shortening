import { useState } from "react";
import { Container } from "./styles";
import Logo from "assets/logo.svg";
import { IoReorderThreeOutline } from "react-icons/io5";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSetMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <Container>
      <div className="left">
        <img src={Logo} alt="brand" />
        <nav>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </nav>
      </div>

      <div className="right">
        <button className="login">Login</button>
        <button className="sign">Sign Up</button>
      </div>

      <div className="menuBtn">
        <button onClick={handleSetMenu}>
          <IoReorderThreeOutline />
        </button>
      </div>

      {openMenu && (
        <div className="Menu">
          <div className="nav">
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>

          <hr />

          <div className="btns">
            <button className="login">Login</button>
            <button className="sign">Sign Up</button>
          </div>
        </div>
      )}
    </Container>
  );
};
