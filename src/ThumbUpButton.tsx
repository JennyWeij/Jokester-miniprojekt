import styled from "styled-components";

function ThumbUpButton() {

  return (
    <>
      <Button>
        <ImageYes src="src/assets/Images/ThumbUp-Button.png" />
      </Button>
    </>
  )
}

const ImageYes = styled.img`
  width: 150px;
  display: flex;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default ThumbUpButton;
