import { useState } from "react";
import styled from "styled-components";

function ThumbUpButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    console.log('Klickad');
  };

  return (
    <>
      <Button onClick={handleClick}>
        <ImageYes src={isClicked ? "src/assets/Images/ThumbUp-ButtonGreen.png" : "src/assets/Images/ThumbUp-Button.png"} />
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
