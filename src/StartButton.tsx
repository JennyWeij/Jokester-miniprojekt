import { Link } from "react-router-dom";
import styled from "styled-components";

function StartButton() {

  return (
    <Link to="menu">
      <ButtonStart>
        <ImageLetsGo src="src/assets/LetsGoButton.svg" />
      </ButtonStart>
    </Link>
  )
}
const ImageLetsGo = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 250px;
`;
const ButtonStart = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    top: 70%;
    max-width: 200px;
  }

  @media (max-width: 365px) {
    top: 65%;
    max-width: 150px;
  }
`;

export default StartButton