import styled from "styled-components";
import "./assets/fonts/fonts.css";

function Footer() {

  return (
    <FooterContainer>
      <FooterDiv>
        <p>If you didn't laugh, please contact us at; ihavenosenseofhumour@yahoo.don't</p>
      </FooterDiv>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: hidden;
`;

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b0848;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-family: PoppinsRegular;
`;

export default Footer