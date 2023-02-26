import styled from "styled-components";

function StartButton() {
  return (
    <ButtonStart>Let's go!</ButtonStart>
  )
}

const ButtonStart = styled.div`
position: absolute;
top: 70%;
left: 40%;
color: white;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
text-align: left;
padding: 2rem;
font-size: 5rem;
`;


export default StartButton