import styled from "styled-components";

function ThumbUpButton() {

  const handleClick = () => {
  };

  return (
    <>
      <Button onClick={handleClick}>
      <ImageYes src="src/assets/Images/ThumbUp-Button.svg" />
      </Button>
    </>
  )
}

const ImageYes = styled.img`
width: 100px;
display: flex;


@media (max-width: 768px) {
  max-width: 100px;
  }
  @media (max-width: 375px) {
    max-width: 55px;
  }
`
const Button = styled.button`

cursor: pointer;
border: none;
top: 80%;
background-color: transparent;


@media (max-width: 768px) {
    top: 70%;
    max-width: 200px;
  }
  @media (max-width: 365px) {
    top: 80%;
    max-width: 150px;
  }`


export default ThumbUpButton