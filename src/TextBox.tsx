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
        Please select your category to get started
      </p>
    </TextBoxDiv>
  )
}

const TextBoxDiv = styled.div`
  height: 16rem;
  width: 35rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: #6B0848;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
  box-shadow: 1rem 2rem 5rem #6B0810;
`;

export default TextBox