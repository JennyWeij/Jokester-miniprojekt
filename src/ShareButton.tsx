import styled from "styled-components"

function ShareButton() {
  const handleClick = () => {
    console.log('Klickad')
  }
  return (
    <>
    <Button onClick={handleClick}>
      <ImageShare src="src/assets/Share-Button.svg" />
      </Button>
    </>
  )
}
const ImageShare = styled.img`
width: 75px;`

const Button = styled.button`
cursor: pointer;
border: none;
background-color: transparent;`



export default ShareButton