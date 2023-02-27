import styled from 'styled-components';

function CategoryButton() {
  return (
    <>
    <ButtonLeftTop>Category 1</ButtonLeftTop>
    <ButtonRightTop>Category 2</ButtonRightTop>
    <ButtonLeftBottom>Category 3</ButtonLeftBottom>
    <ButtonRightBottom>Category 4</ButtonRightBottom>
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

const ButtonLeftBottom = styled.button`
  position: absolute;
  top: 55%;
  left: 30%;
  border-radius: 4%;
  height: 4.5rem;
  width: 13rem;
  color: white;
  background-color: #6b0848;
  font-family: PoppinsRegular;
  font-size: 2rem;
`;

const ButtonRightBottom = styled.button`
  position: absolute;
  top: 55%;
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