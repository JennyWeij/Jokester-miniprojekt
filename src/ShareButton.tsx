import { useState } from "react";
import styled from "styled-components";

function ShareButton() {
  const [showInput, setShowInput] = useState(false);
  
  const handleClick = () => {
    setShowInput(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
    {!showInput ? ( 
      <Button onClick={handleClick}>
        <ImageShare src="src/assets/Share-Button.svg" />
      </Button>
    ) : (
      <Form onSubmit={handleClick}>
        <Input type="text" placeholder="Insert email here.."/>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    )}
    </>
  )
}

const ImageShare = styled.img`
width: 50px;

`
const Button = styled.button`
  cursor: pointer;
  border: none;
  bottom: 0;
  transform: translateX(-50%);
  background-color: transparent;
`;

const Form = styled.form`
  display:flex;
  justify-content: right;
  flex-direction: column;`

const Input = styled.input`
  width: 150px;
  height: 1.5rem;
  border: none;
  margin: 0.5rem;
  background-color: #6B0848;
  color: white`

const SubmitButton = styled.button`
  width: 150px;
  height: 1.5rem;
  margin: 0.5rem;
  color: #6B0848;
  border: none;


  @media (max-width: 768px) {
    top: 70%;
    max-width: 200px;
  }

  @media (max-width: 365px) {
    top: 65%;
    max-width: 150px;
  }
`;


export default ShareButton