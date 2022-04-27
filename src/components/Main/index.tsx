import { Container } from "./styles";
import Ilustration from "assets/illustration-working.svg";

export const Main = () => {
  return (
    <Container>
      <div className="left">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>

      <div className="right">
        <img src={Ilustration} alt="Ilustration" />
      </div>
    </Container>
  );
};
