import styled from "styled-components";

function StartButton() {
  return (
    <ButtonStart>
      <ImageLetsGo src="src/assets/LetsGoButton.svg" />
    </ButtonStart>
  )
}

const ImageLetsGo = styled.img`
cursor: pointer;
max-width: 250px;
`
const ButtonStart = styled.div`
position: absolute;
top: 70%;
left: 40%;


`;


export default StartButton