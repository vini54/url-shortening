import { Container } from "./styles";

export const Links = () => {
  return (
    <Container>
      <div className="inputContainer">
        <input type="text" placeholder="Shorthen a link here..." />

        <button>Shorthen it!</button>
      </div>

      <ul>
        <li>
          <div className="link">
            <p>https://www.frontendmentor.io</p>
            <a href="#">https://www.re.ink/klkjdf</a>
          </div>
          <button>Copy</button>
        </li>
        <li>
          <div className="link">
            <p>https://www.frontendmdfadfdentor.io</p>
            <a href="#">https://www.re.ink/klkjdf</a>
          </div>
          <button>Copy</button>
        </li>
        <li>
          <div className="link">
            <p>https://www.frontendddafafdfdsmentor.io</p>

            <a href="#">https://www.fafasdfdare.ink/klkjdf</a>
          </div>
          <button>Copy</button>
        </li>
        <li>
          <div className="link">
            <p>https://www.frontendmentor.io</p>
            <a href="#">https://www.re.ink/klkjdf</a>
          </div>
          <button>Copy</button>
        </li>
      </ul>
    </Container>
  );
};
