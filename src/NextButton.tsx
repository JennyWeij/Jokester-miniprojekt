import styled from "styled-components";

interface Props {
  handleNewJoke: () => void;
}

function NextButton(props: Props) {
  return (
    <ButtonStart>
      <ImageNext src="src/assets/NEXT-Button.svg" onClick={props.handleNewJoke} />
    </ButtonStart>
  )
}
const ImageNext = styled.img`
  cursor: pointer;
  width: 250px;
`
const ButtonStart = styled.div`
  position: absolute;
  top: 80%;
  left: 35%;

`;

export default NextButton