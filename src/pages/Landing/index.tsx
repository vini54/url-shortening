import { Container } from "./styles";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Links } from "components/Links";

export const Landing = () => {
  return (
    <Container>
      <Header />

      <Main />

      <Links />
    </Container>
  );
};
