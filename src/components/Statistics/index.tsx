import { Container } from "./styles";
import icon1 from "assets/icon-brand-recognition.svg";
import icon2 from "assets/icon-detailed-records.svg";
import icon3 from "assets/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
    <Container>
      <div className="head">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="cardsContainer">
        <div className="line" />

        <Card
          icon={icon1}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />

        <Card
          icon={icon2}
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when
          and where people engage with your content helps inform better decisions."
        />

        <Card
          icon={icon3}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability
          through customizable links, supercharging audience engagement."
        />
      </div>
    </Container>
  );
};

type cardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: cardProps) => {
  return (
    <div className="card">
      <div className="img">
        <img src={icon} alt="icon" />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};
