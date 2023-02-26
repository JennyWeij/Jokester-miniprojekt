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
justify-content: center;
padding: 2rem;
font-size: 2.5rem;
background-color: #59D8F4;
border-radius: 80%;
box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem lightblue;
`;


export default StartButton