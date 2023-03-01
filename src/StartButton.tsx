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
width: 250px;
`
const ButtonStart = styled.div`
position: absolute;
top: 75%;
left: 45%;


`;


export default StartButton