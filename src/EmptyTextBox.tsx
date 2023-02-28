import { useEffect, useState } from "react";
import styled from "styled-components";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

function EmptyTextBox() {
  const [joke, setJoke] = useState<Joke>()
  
  useEffect(() => {
    fetch ('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((result) => setJoke(result))
  }, []);

  console.log(joke)

  return (
    <EmptyTextBoxDiv>
           {joke ? (
        <>
          <div>{joke.setup}</div>
          <div>{joke.punchline}</div>
        </>
      ) : (
        <div>Loading joke...</div>
      )}
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