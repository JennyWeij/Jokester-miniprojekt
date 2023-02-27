import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Header from "./Header";



function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      
      <JokeText> What did the big flower say to the little flower? 'Hey there, bud!'
     
      {/* Knappar div */}
      <ButtonsDiv>
        <ImageNo src="src/assets/Images/ThumbDown-Button.svg" />
        <ImageNext src="src/assets/NEXT-Button.svg" />
        <ImageYes src="src/assets/Images/ThumbUp-Button.svg" />

      </ButtonsDiv>
     </JokeText>

     <div>
     </div>
    </div>
  )
}
const ButtonsDiv = styled.div `
display: flex;

justify-content: space-between;
align-items: center;
margin-top: 10px;
padding: 30px;
background: "blue";
`

const ImageNo = styled.img`
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
left: 210px;
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




export default JokePage