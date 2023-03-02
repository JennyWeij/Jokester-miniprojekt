import styled from "styled-components";

function ThumbUpButton() {
  
  const handleClick = () => {
    console.log('Klickad')
  };

  return (
    <>
      <Button onClick={handleClick}>
      <ImageYes src="src/assets/Images/ThumbUp-Button.svg" />
      </Button>
    </>
  )
}

const ImageYes = styled.img`
width: 150px;
display: flex;
`

const Button = styled.button`
cursor: pointer;
border: none;
position: absolute;
left: 75%;
top: 80%;
background-color: transparent;


@media (max-width: 768px) {
    top: 80%;
    max-width: 200px;
  }

  @media (max-width: 365px) {
    top: 65%;
    max-width: 150px;
  }`


export default ThumbUpButton