import { Container } from "./styles";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Links } from "components/Links";
import { Statistics } from "components/Statistics";
import { Boost } from "components/Boost";
import { Footer } from "components/Footer";

export const Landing = () => {
  return (
    <Container>
      <Header />

      <Main />

      <Links />

      <Statistics />

      <Boost />

      <Footer />

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/vini54"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vinícius Oliveira
        </a>
        .
      </div>
    </Container>
  );
};
