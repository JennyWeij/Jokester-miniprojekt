import styled from "styled-components";

function EmptyTextBox() {
  return (
    <EmptyTextBoxDiv>
      <p>Testar
      </p>
    </EmptyTextBoxDiv>
  )
}

const EmptyTextBoxDiv = styled.div`
  height: 20rem;
  width: 35rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: none;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
`;

export default EmptyTextBox