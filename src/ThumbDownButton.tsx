import styled from "styled-components";

function ThumbDownButton() {
  
  const handleClick = () => {
    console.log('Klickad')
  };

  return (
    <>
      <Button onClick={handleClick}>
      <ImageNo src="src/assets/Images/ThumbDown-Button.svg" />
      </Button>
    </>
  )
}

const ImageNo = styled.img`
width: 150px;
display: flex;
`

const Button = styled.button`
cursor: pointer;
border: none;
background-color: transparent;`



export default ThumbDownButton