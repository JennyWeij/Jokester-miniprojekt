import { useEffect, useState } from "react";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";
import NextButton from "./NextButton";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

function EmptyTextBoxGeneral() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    const fetchJoke = () => {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((result) => {
          if (result.type === "general") {
            setJoke(result);
          } else {
            fetchJoke();
          }
        });
    };
    fetchJoke();
  }, []);

  const handleNewJoke = () => {
    const fetchJoke = () => {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((result) => {
          if (result.type === "general") {
            setJoke(result);
          } else {
            fetchJoke();
          }
        });
    };
    fetchJoke();
  };

  console.log(joke)

  return (
    <ErrorBoundary>
      <EmptyTextBoxDiv>
      {joke ? (
        <>
          <div>{joke.setup}</div>
          <br />
          <div>{joke.punchline}</div>
          <NextButton handleNewJoke={handleNewJoke} />
        </>
      ) : (
        <div>Prepare to laugh...</div>
      )}
    </EmptyTextBoxDiv>
    </ErrorBoundary>
  );
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

export default EmptyTextBoxGeneral