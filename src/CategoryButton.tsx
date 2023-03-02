import { useState } from 'react';
import styled from 'styled-components';
import JokePage from './JokePage';

function CategoryButton() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handleButtonClick() {
    setIsButtonClicked(true);
  }
  
  return (
    <>
     <ButtonLeftTop onClick={handleButtonClick}>Programming</ButtonLeftTop>
      <ButtonRightTop>General</ButtonRightTop>
      {isButtonClicked && <JokePage />}
    </>
  )
}

const ButtonLeftTop = styled.button`
  position: absolute;
  background-color: rgba(107, 8, 72, 1);
  top: 40%;
  left: 30%;
  color: white;
  cursor: pointer;
  font-size: 24px;
  margin: 14px;
  padding: 12px 18px;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;
`;


const ButtonRightTop = styled.button`
  position: absolute;
  background-color: rgba(107, 8, 72, 1);
  top: 40%;
  left: 60%;
  color: white;
  cursor: pointer;
  font-size: 24px;
  margin: 14px;
  padding: 12px 18px;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;
`;

export default CategoryButton