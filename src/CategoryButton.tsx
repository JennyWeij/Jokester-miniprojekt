import styled from 'styled-components';

function CategoryButton() {
  return (
    <>
    <ButtonLeftTop>Programming</ButtonLeftTop>
    <ButtonRightTop>General</ButtonRightTop>
    </>
  )
}

const ButtonLeftTop = styled.button`
  position: absolute;
  top: 30%;
  left: 30%;
  border-radius: 4%;
  height: 4.5rem;
  width: 13rem;
  color: white;
  background-color: #6b0848;
  font-family: PoppinsRegular;
  font-size: 2rem;
`;


const ButtonRightTop = styled.button`
  position: absolute;
  top: 30%;
  left: 55%;
  border-radius: 4%;
  height: 4.5rem;
  width: 13rem;
  color: white;
  background-color: #6b0848;
  font-family: PoppinsRegular;
  font-size: 2rem;
`;

export default CategoryButton