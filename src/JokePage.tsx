import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Header from "./Header";



function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <div></div>
      <JokeText> What did the big flower say to the little flower? 'Hey there, bud!'
     
      {/* Knappar div */}
      <div className="ButtonsDiv">
        <ImageNo src="src/assets/Images/ThumbDown-Button.svg" />
        <ImageNext src="src/assets/NEXT-Button.svg" />
        <ImageYes src="src/assets/Images/ThumbUp-Button.svg" />

      </div>
     </JokeText>

     <div>
     </div>
    </div>
  )
}
const ImageNext = styled.img`
width: 100px;
`

const ImageNo = styled.img`
width: 100px;
`
const ImageYes = styled.img`
width: 100px;
`




const JokeText = styled.div`
position: absolute;
top: 150px;
padding: 20px;
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