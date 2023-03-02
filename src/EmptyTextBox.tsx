import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import NextButton from "./NextButton";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

interface Props {
  category: "programming" | "general";
}

function EmptyTextBox(props: Props) {
  const [joke, setJoke] = useState<Joke>();

  const fetchJoke = useCallback(() => {
    fetch(`https://official-joke-api.appspot.com/jokes/${props.category}/random`)
      .then((response) => response.json())
      .then((result) => {
          setJoke(result[0]);
      });
  }, [props.category]);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
          <EmptyTextBoxDiv>
      {joke ? (
        <>
          <div>{joke.setup}</div>
          <br />
          <div>{joke.punchline}</div>
          <NextButton handleNewJoke={fetchJoke} />
        </>
      ) : (
        <div>Prepare to laugh...</div>
      )}
    </EmptyTextBoxDiv>
   
  );
}

const EmptyTextBoxDiv = styled.div`
  height: 20rem;
  max-width: 35rem;
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

  @media (max-width: 768px) {
    height: auto;
    max-width: 90%;
    top: 40%;
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

export default EmptyTextBox