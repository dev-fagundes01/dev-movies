import Card from "./Card";
import { DivSlider, H2 } from "./styles";

function Slider({ info, title }) {
  return (
    <>
      <H2>{title}</H2>
      <DivSlider>
        {info.slice(0, 30).map((item, index) => (
          <div key={index}>
            <Card item={item} />
          </div>
        ))}
      </DivSlider>
    </>
  );
}

export default Slider;
