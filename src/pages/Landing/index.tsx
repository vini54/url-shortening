import { Container } from "./styles";
import Logo from "assets/logo.svg";

export const Landing = () => {
  return (
    <Container>
      <header>
        <div>
          <img src={Logo} alt="brand" />
        </div>
      </header>
    </Container>
  );
};
