import styled from "styled-components";

function ThumbDownButton() {
  
  const handleClick = () => {
  };

  return (
    <>
      <Button onClick={handleClick}>
      <ImageNo src="src/assets/Images/ThumbDown-Button.svg" />
      </Button>
    </>
  )
}

const ImageNo = styled.img`
  width: 150px;
  display: flex;
  left: 60%;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  left: 10%;
  top: 85%;
  background-color: transparent;

@media (max-width: 768px) {
    top: 85%;
    max-width: 200px;
  }

  @media (max-width: 365px) {
    top: 65%;
    max-width: 150px;
  }`

export default ThumbDownButton