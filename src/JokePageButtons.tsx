import styled from "styled-components";
import ShareButton from "./ShareButton";
import ThumbDownButton from "./ThumbDownButton";
import ThumbUpButton from "./ThumbUpButton";

function JokePageButtons () {
  return (
    <div> 
      <ButtonsDiv>
        <ThumbDownButton />
        {/*<ImageNext src="src/assets/NEXT-Button.svg" />*/}
        <ThumbUpButton />
        <ShareButton />
      </ButtonsDiv>
    </div>
  )
}
const ButtonsDiv = styled.div `
display: flex;
position: absolute;
justify-content: space-between;
align-items: center;
left: 25%;
bottom: 0;
padding: 30px;
background: "blue";
`


const ImageNo = styled.img`
cursor: pointer;
width: 150px;
`
const ImageNext = styled.img`

width: 200px;
`
const ImageYes = styled.img`
width: 150px;
`



const JokeText = styled.div`
position: absolute;
top: 150px;
left: 220px;
padding: 50px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-size: 2.5rem;
font-family: Poppins-Regular; 
`;


export default JokePageButtons