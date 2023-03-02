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
  width: 250px;
`
const ButtonStart = styled.button`
  position: absolute;
  top: 75%;
  left: 45%;
`;

export default StartButton