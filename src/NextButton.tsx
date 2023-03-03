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
width: 150px;
display: flex;

@media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 365px) {
    max-width: 40px;
  }
`
const ButtonStart = styled.div`
top: 85%;
left: 40%;
`;

export default NextButton