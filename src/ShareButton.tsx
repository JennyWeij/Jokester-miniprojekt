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
width: 40px;
display: flex;
`

const Button = styled.button`
cursor: pointer;
border: none;
background-color: transparent;`

const Form = styled.form`
display:flex;
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
border: none;`


export default ShareButton