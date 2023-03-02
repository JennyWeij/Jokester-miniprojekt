import styled from "styled-components";
import "./assets/fonts/fonts.css";

function Footer() {

  return (
    <FooterContainer>
      <FooterDiv>
        <PText>If you didn't laugh, please contact us at; pissoffchucknorris@yahoo.com</PText>
      </FooterDiv>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const FooterDiv = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b0848;
  color: white;
  text-align: center;
  font-family: PoppinsRegular;
`;

const PText = styled.p`
  font-size: clamp(0.4rem, 3vw, 1.3rem);
  `;

export default Footer