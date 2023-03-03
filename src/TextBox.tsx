import styled from "styled-components";

function TextBox() {
  return (
    <TextBoxDiv>
      <p>
        Welcome to Jokester!
      </p>
      <p>
        If you ever feel low, want to make people laugh or just laugh yourself - 
        you have come to the right place!
        Please hit the button below to select your category.
      </p>
    </TextBoxDiv>
  )
}

const TextBoxDiv = styled.div`
  height: 16rem;
  max-width: 35rem;
  width: 100%;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: transparent;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
  box-shadow: 1rem 2rem 5rem #6B0810;

  @media (max-width: 768px) {
    height: auto;
    max-width: 90%;
    top: 40%;
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

export default TextBox