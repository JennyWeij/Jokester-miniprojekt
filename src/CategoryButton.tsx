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
  max-width: 13rem;
  margin: 14px;
  padding: 12px 18px;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;


  @media (max-width: 768px) {
    top: 30%;
    left: 20%;
    max-width: 10rem;
    font-size: 1rem;
  }

  @media (max-width: 365px) {
    top: 20%;
    left: 10%;
    max-width: 8rem;
    font-size: 0.8rem;
  }
`;


const ButtonRightTop = styled.button`
  position: absolute;
  background-color: rgba(107, 8, 72, 1);
  top: 40%;
  left: 60%;
  color: white;
  cursor: pointer;
  font-size: 24px;
  max-width: 10rem;
  margin: 14px;
  padding: 12px 18px;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;

  @media (max-width: 768px) {
    top: 30%;
    left: 60%;
    max-width: 10rem;
    font-size: 1rem;
  }

  @media (max-width: 365px) {
    top: 20%;
    left: 50%;
    max-width: 8rem;
    font-size: 0.8rem;
  }
`;



export default CategoryButton