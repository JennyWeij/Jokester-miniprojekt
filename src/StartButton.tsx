import { useState } from "react";
import styled from "styled-components";
import MenuPage from "./MenuPage";
import StartPage from "./StartPage";


function StartButton() {
  const [isStartPageVisible, setStartPageVisible] = useState(true);

  const handleClick = () => {
    setStartPageVisible(false); 
  };

  return (
    <>
      {isStartPageVisible ? (
         <StartPage />  
      ) : (
        <MenuPage />
      )}
      
       <ButtonStart>
        <ImageLetsGo src="src/assets/LetsGoButton.svg" onClick={handleClick} />
        </ButtonStart>
    </>
     );
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