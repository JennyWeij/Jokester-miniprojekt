import styled from "styled-components";

function StartButton() {
  return (
    <ButtonStart>
      <p>
        Let's go!        
      </p>
    </ButtonStart>
  )
}

const ButtonStart = styled.div`
position: absolute;
top: 75%;
left: 45%;
color: #6B0848;
height: 5.5rem;
width: 6.5rem;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
text-align: left;
padding: 2rem;
font-size: 5rem;
background-color: #59D8F4;
border-radius: 80%;
display: flex;
flex-direction: column;
padding: 2rem;
font-size: 2.5rem;
box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem lightblue;
`;


export default StartButton