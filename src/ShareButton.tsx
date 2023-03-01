import { useState } from "react";
import styled from "styled-components";

function ShareButton() {
  const [showInput, setShowInput] = useState(false);
  
  const handleClick = () => {
    setShowInput(true);
    console.log('Klickad')

  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Skickat')
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
width: 75px;`

const Button = styled.button`
cursor: pointer;
border: none;
background-color: transparent;`

const Form = styled.form`
display:flex;
flex-direction: column;`

const Input = styled.input`
width: 70px;`

const SubmitButton = styled.button`
color: yellow;`


export default ShareButton