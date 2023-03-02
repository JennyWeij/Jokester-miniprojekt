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
background-color: transparent;`



export default ThumbUpButton