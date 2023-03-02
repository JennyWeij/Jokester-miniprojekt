import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CategoryButton() {

  
  return (
    <>
    <Link to="/joke">
     <ButtonLeftTop>Programming</ButtonLeftTop>
    </Link>

    <Link to="/generaljoke">
      <ButtonRightTop>General</ButtonRightTop>
    </Link>
    </>
  )
}

const ButtonLeftTop = styled.button`
  position: absolute;
  background-color: rgba(107, 8, 72, 1);
  top: 40%;
  left: 30%;
  color: white;
  cursor: pointer;
  font-size: 24px;
  margin: 14px;
  padding: 12px 18px;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;
`;


const ButtonRightTop = styled.button`
  position: absolute;
  background-color: rgba(107, 8, 72, 1);
  top: 40%;
  left: 60%;
  color: white;
  cursor: pointer;
  font-size: 24px;
  margin: 14px;
  padding: 12px 18px;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;
`;

export default CategoryButton